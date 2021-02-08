import { shallowMount } from '@vue/test-utils'
import Playground from '@/components/Playground.vue'

describe('Playground.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Playground, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
