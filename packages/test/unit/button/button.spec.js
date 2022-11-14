import { mount } from '@vue/test-utils';
import LdButton from '../../../components/button';

describe('Button', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(LdButton);
        // expect(wrapper.find('button').exist()).toBe(true);
        expect(wrapper.exists()).toBe(true);
    });

    test('positive color', () => {
        const wrapper = mount(LdButton, {
            propsData: {
                type: 'positive',
            },
        });
        expect(wrapper.classes('ld-button--positive')).toBe(false);
    });
});