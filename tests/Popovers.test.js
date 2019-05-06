import Popovers from '../src/js/Popovers';

const config = {
    element: '[data-widget=popover]',
    value: 'Click to toggle popover',
    className: 'popovers popovers-button',
    windowTitle: 'Popover title',
    windowDesc: 'And here"s some amazing content. It"s very engaging. Right?'
};

describe('TEST: Popovers', () => {
    test('show popovers', () => {
        document.body.innerHTML = '<div data-widget="popover"></div>';
        const popovers = new Popovers(config);

        popovers.button.click();

        const received = 'popover__window';
        const expected = popovers.window.className;

        expect(received).toBe(expected);
    });



    test('hide popovers', () => {
        document.body.innerHTML = '<div data-widget="popover"></div>';
        const popovers = new Popovers(config);

        const received = null;
        const expected = popovers.window;

        expect(received).toBe(expected);
    });
});
