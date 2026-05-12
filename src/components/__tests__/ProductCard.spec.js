import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductCard from '../ProductCard.vue'

const mockProduct = {
  id: 1,
  title: 'T-Shirt',
  price: 44,
  images: ['http://example.com/img1.jpg'],
  sizes: [
    { size: 'S', quantity: 10 },
    { size: 'M', quantity: 8 },
    { size: 'L', quantity: 5 },
  ],
  category: { name: 'Clothes' },
}

const mountCard = (product = mockProduct) =>
  mount(ProductCard, {
    props: { product },
    global: {
      stubs: { Teleport: { template: '<div><slot /></div>' } },
    },
  })

describe('ProductCard', () => {
  it('modal opens when card is clicked', async () => {
    const wrapper = mountCard()

    await wrapper.find('.card').trigger('click')

    expect(wrapper.find('.modal').exists()).toBe(true)
  })

  it('modal closes when backdrop is clicked', async () => {
    const wrapper = mountCard()

    await wrapper.find('.card').trigger('click')
    await wrapper.find('.modal-backdrop').trigger('click')

    expect(wrapper.find('.modal').exists()).toBe(false)
  })

  it('modal closes when X button is clicked', async () => {
    const wrapper = mountCard()

    await wrapper.find('.card').trigger('click')
    await wrapper.find('.btn-close').trigger('click')

    expect(wrapper.find('.modal').exists()).toBe(false)
  })

  it('renders a size button for each size', async () => {
    const wrapper = mountCard()

    await wrapper.find('.card').trigger('click')

    const sizeButtons = wrapper.findAll('.size-btn')
    expect(sizeButtons).toHaveLength(mockProduct.sizes.length)
    expect(sizeButtons[0].text()).toBe('S')
    expect(sizeButtons[1].text()).toBe('M')
    expect(sizeButtons[2].text()).toBe('L')
  })

  it('renders no size buttons for products without sizes', async () => {
    const wrapper = mountCard({ ...mockProduct, sizes: [] })

    await wrapper.find('.card').trigger('click')

    const sizeButtons = wrapper.findAll('.size-btn')
    expect(sizeButtons).toHaveLength(0)
  })
})
