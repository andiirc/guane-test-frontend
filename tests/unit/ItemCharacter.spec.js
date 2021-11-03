import { shallowMount } from '@vue/test-utils';
import ItemCharacter from '@/components/ItemCharacter.vue';

describe('ItemCharacter', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(ItemCharacter);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
