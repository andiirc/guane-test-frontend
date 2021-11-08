import { shallowMount } from '@vue/test-utils';
import PageNotFound from '@/views/PageNotFound.vue';

describe('PageNotFound', () => {
  it('render html', () => {
    const wrapper = shallowMount(PageNotFound);

    const render = wrapper.html();

    expect(render).toMatchSnapshot();
  });

  it('render exist class message', () => {
    const wrapper = shallowMount(PageNotFound);

    const render = wrapper.find('.message').exists();

    expect(render).toBe(true);
  });

  it('render text in paragraph', () => {
    const wrapper = shallowMount(PageNotFound);

    const render = wrapper.find('p').text();

    expect(render).toEqual('La página que está intentando buscar no se encuentra en este universo.');
  });

  it('render text in class message__img', () => {
    const wrapper = shallowMount(PageNotFound);

    const render = wrapper.find('.message__img').text();

    expect(render).toEqual('44');
  });

  it('contain text 44', () => {
    const wrapper = shallowMount(PageNotFound);

    const render = wrapper.html();

    expect(render).toContain('44');
  });

  it('render exist class message__img', () => {
    const wrapper = shallowMount(PageNotFound);

    const render = wrapper.find('.message__img').exists();

    expect(render).toBe(true);
  });
});
