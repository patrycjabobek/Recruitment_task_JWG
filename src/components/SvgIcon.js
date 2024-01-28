class SvgIcon {
    constructor (options = {}) {
        const {
            iconName = 'defaultIcon',
            width = 24,
            height = 24,
            viewBox = '0 0 24 24',
            color = 'black',
            svgContent = ''
        } = options;

        this.iconName = iconName;
        this.width = width;
        this.height = height;
        this.viewBox = viewBox;
        this.color = color;
        this.svgContent = svgContent;
    }

    generateSvg() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" viewBox=${this.viewBox} fill="${this.color}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${this.svgContent}
      </svg>
        `
    }

    render(targetElement) {
        const svg = this.generateSvg();
        targetElement.innerHTML = svg;
    }
}

export default SvgIcon;