class FAQSection {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.faqItems = [];
    }

    addFAQItem(faqItem) {
        this.faqItems.push(faqItem);
    }

    render() {
        this.faqItems.forEach(faqItem => {
            const faqElement = faqItem.createComponent();
            this.container.appendChild(faqElement);
        });
    }
}

export default FAQSection;