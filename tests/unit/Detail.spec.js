import { shallowMount } from '@vue/test-utils';
import Detail from '@/views/Detail.vue';
import DetailCharacter from '@/components/DetailCharacter.vue';

describe('Detail.', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Detail);

    const render = wrapper.html();

    expect(render).toMatchSnapshot();
  });

  it('renders components child detail character', () => {
    const wrapper = shallowMount(Detail);

    const detaildCharacter = wrapper.findComponent(DetailCharacter);

    expect(detaildCharacter.exists()).toBe(true);
  });
});
