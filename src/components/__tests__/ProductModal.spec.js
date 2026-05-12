import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductModal from '../ProductModal.vue'

vi.mock('@/assets/svgs/add.svg?component', () => ({
  default: { template: '<svg />' },
}))

const mockProduct = {
  id: 1,
  title: 'T-Shirt',
  price: 44,
  images: ['http://example.com/img1.jpg', 'http://example.com/img2.jpg'],
  sizes: [{ size: 'S', quantity: 10 }],
  category: { name: 'Clothes' },
}

const mountModal = (props = {}) =>
  mount(ProductModal, {
    props: { product: mockProduct, open: true, ...props },
    global: {
      stubs: { Teleport: { template: '<div><slot /></div>' } },
    },
  })

describe('ProductModal', () => {
  it('renders the product title in the header', () => {
    const wrapper = mountModal()

    expect(wrapper.find('.modal-title').text()).toBe(mockProduct.title)
  })

  it('renders an image for each product image', () => {
    const wrapper = mountModal()

    const imgs = wrapper.findAll('.carousel-item img')
    expect(imgs).toHaveLength(mockProduct.images.length)
    expect(imgs[0].attributes('src')).toBe(mockProduct.images[0])
    expect(imgs[1].attributes('src')).toBe(mockProduct.images[1])
  })

  it('renders the product price', () => {
    const wrapper = mountModal()

    expect(wrapper.text()).toContain(`$${mockProduct.price}`)
  })

  it('emits close when backdrop is clicked', async () => {
    const wrapper = mountModal()

    await wrapper.find('.modal-backdrop').trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
  })

  it('emits close when X button is clicked', async () => {
    const wrapper = mountModal()

    await wrapper.find('.btn-close').trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
