import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createPinia } from 'pinia'
import api from '@/api'
import ProductsContainer from '../ProductsContainer.vue'

const mockProducts = [
  {
    id: 1,
    title: 'T-Shirt',
    images: ['http://example.com/img1.jpg'],
    category: { name: 'Clothes' },
  },
  {
    id: 2,
    title: 'Laptop',
    images: ['http://example.com/img2.jpg'],
    category: { name: 'Electronics' },
  },
]

vi.mock('@/api', () => ({
  default: { get: vi.fn() },
}))

const mountContainer = (props = {}) =>
  mount(ProductsContainer, {
    props,
    global: { plugins: [createPinia()] },
  })

describe('ProductsContainer', () => {
  beforeEach(() => {
    vi.mocked(api.get).mockResolvedValue({ data: mockProducts })
  })

  it('renders an image for each product', async () => {
    const wrapper = mountContainer()
    await flushPromises()

    const imgs = wrapper.findAll('img')
    expect(imgs).toHaveLength(mockProducts.length)
    expect(imgs[0].attributes('src')).toBe(mockProducts[0].images[0])
    expect(imgs[1].attributes('src')).toBe(mockProducts[1].images[0])
  })

  it('renders only products matching the category prop', async () => {
    const wrapper = mountContainer({ category: 'Clothes' })
    await flushPromises()

    const cards = wrapper.findAll('.card')
    expect(cards).toHaveLength(1)
    expect(wrapper.text()).toContain('T-Shirt')
    expect(wrapper.text()).not.toContain('Laptop')
  })
})
