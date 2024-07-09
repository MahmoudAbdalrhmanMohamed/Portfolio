import about from '@/components/Ui/aboutSection.vue'
import { mount } from '@vue/test-utils'
// import en from '@/locales/en.json'

describe('aboutSection', () => {
  it('render inner text', () => {
    const waraper = mount(about)
    // const var2 = JSON.parse(en)
    expect(waraper.text()).contain('a')
    // console.log(var2)
  })
})
