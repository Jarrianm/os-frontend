import { describe, it, expect, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createPinia } from 'pinia'
import api from '@/api'
import ProductsContainer from '../ProductsContainer.vue'

const mockProducts = [
  { id: 1, name: 'Product 1', images: ['http://example.com/img1.jpg'] },
  { id: 2, name: 'Product 2', images: ['http://example.com/img2.jpg'] },
]

vi.mock('@/api', () => ({
  default: { get: vi.fn() },
}))

describe('ProductsContainer', () => {
  it('renders an image for each product', async () => {
    vi.mocked(api.get).mockResolvedValue({ data: mockProducts })

    const wrapper = mount(ProductsContainer, {
      global: {
        plugins: [createPinia()],
      },
    })

    await flushPromises()

    const imgs = wrapper.findAll('img')
    expect(imgs).toHaveLength(mockProducts.length)
    expect(imgs[0].attributes('src')).toBe(mockProducts[0].images[0])
    expect(imgs[1].attributes('src')).toBe(mockProducts[1].images[0])
  })
})
