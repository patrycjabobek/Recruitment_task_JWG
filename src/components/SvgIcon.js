class SvgIcon {
    constructor (options = {}) {
        const {
            iconName = 'defaultIcon',
            width = 24,
            height = 24,
            color = 'black',
            className = '',
            svgContent = ''
        } = options;

        this.iconName = iconName;
        this.width = width;
        this.height = height;
        this.color = color;
        this.className = className;
        this.svgContent = svgContent;
    }

    generateSvg() {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}"  fill="${this.color}" class="${this.className}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
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