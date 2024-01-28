class JobOfferList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.jobOfferItems = [];
    }

    addOfferItem(jobOffer) {
        this.jobOfferItems.push(jobOffer);
    }

    render() {
        this.jobOfferItems.forEach(jobOffer => {
            const jobOfferElement = jobOffer.createComponent();
            this.container.appendChild(jobOfferElement);
        });
    }
}

export default JobOfferList;