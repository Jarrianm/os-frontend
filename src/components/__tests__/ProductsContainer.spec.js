import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ProductsContainer from '../ProductsContainer.vue'

describe('ProductsContainer', () => {
  it('renders properly', () => {
    const wrapper = mount(ProductsContainer)
    expect(wrapper.text()).toContain('products container')
  })
})
