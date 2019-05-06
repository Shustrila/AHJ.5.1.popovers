class Popovers {
    constructor(obj) {
        if (typeof obj !== "object") throw new TypeError('argument not object!');
        if (obj.element === undefined) throw new TypeError('no root element!');

        this.element = obj.element;
        this.value = obj.value || 'button';
        this.className = obj.className || 'popovers';
        this.windowTitle = obj.windowTitle || 'the title';
        this.windowDesc = obj.windowDesc || 'the description';
        this.timeAnimation = obj.timeAnimation || 0.25;

        this.window = null;
        this.button = null;

        this.init();
    }

    init() {
        const root = document.querySelector(this.element);
        this.button = document.createElement('button');

        this.button.className = this.className;
        this.button.innerHTML = this.value;

        this.button.addEventListener('click', (e) => this.onClickButton(e, root));

        root.style.position = 'relative';
        root.appendChild(this.button);
    }

    onClickButton(e, root) {
        if (this.window === null) {
            this.createWindow();
            root.prepend(this.window);
        } else {
            this.window.style.opacity = 0;
            setTimeout(() => {
                this.window.remove();
                this.window = null;
            }, this.timeAnimation * 1000);
        }
    }

    createWindow() {
        this.window = document.createElement('div');
        const title = document.createElement('h2');
        const desc = document.createElement('p');

        title.className = 'popover__window-title';
        title.innerHTML = this.windowTitle;

        desc.className = 'popover__window-desc';
        desc.innerHTML = this.windowDesc;

        this.window.appendChild(title);
        this.window.appendChild(desc);
        this.window.className = 'popover__window';
        // style
        this.window.style.position = 'absolute';
        this.window.style.opacity = 0;
        this.window.style.left = '0px';
        this.window.style.transform = 'translateY(-125%)';
        this.window.style.transition = this.timeAnimation+'s';

        setTimeout(() => this.window.style.opacity = 1, this.timeAnimation * 1000);
    }
}

export default Popovers
