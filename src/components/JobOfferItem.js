import SvgIcon from "./SvgIcon";

class JobOfferItem {
    constructor(jobName, companyName, workPlace, description, salary) {
        this.jobName = jobName;
        this.companyName = companyName;
        this.workPlace = workPlace;
        this.description = description;
        this.salary = salary;
        this.htmlElement = null;
    }

    createComponent() {
        const container = document.createElement('div');
        container.classList.add("list__item");

        const salaryElement = document.createElement('div');
        salaryElement.classList.add('item__salary');
        salaryElement.textContent = this.salary;
        
        const infoElement = document.createElement('div');
        infoElement.classList.add('item__info');
        
        const jobNameElement = document.createElement('h1');
        const workPlaceElement = document.createElement('h2');
        const companyNameElement = document.createElement('h2');

        jobNameElement.textContent = this.jobName;
        companyNameElement.textContent = "Nazwa Firmy: " + this.companyName;
        workPlaceElement.textContent = "Miejsce pracy: " + this.workPlace;

        infoElement.append(jobNameElement, companyNameElement, workPlaceElement);

        const descriptionSection = document.createElement('div');
        const descriptionHeaderElement = document.createElement('h1');
        const descriptionElement = document.createElement('p');

        descriptionSection.classList.add('item__description');
        descriptionHeaderElement.textContent = "OPIS";
        descriptionElement.textContent = this.description;

        descriptionSection.append(descriptionHeaderElement, descriptionElement);

        const iconSection = document.createElement('div');
        iconSection.classList.add('item__more')
        const anchorElement = document.createElement('a');
        const anchorSection = document.createElement('div');
        const moreTextElement = document.createTextNode('WIĘCEJ')

        const svgContent = ' <rect x="2.62549" y="0.356445" width="12.3174" height="2.73721" fill="black"/><rect x="14.9614" y="0.356323" width="12.3174" height="2.73721" transform="rotate(90 14.9614 0.356323)" fill="black"/><rect x="15" y="2.29187" width="18.4762" height="2.73721" transform="rotate(135 15 2.29187)" fill="black"/>'
        const iconElement = new SvgIcon({
            iconName: 'arrowRightUpSmall',
            width: 15,
            height: 16,
            color: '',
            className: '',
            svgContent: svgContent
        }) 
        
        iconElement.render(anchorSection);
        anchorSection.appendChild(moreTextElement);
        anchorElement.appendChild(anchorSection)
        iconSection.appendChild(anchorElement);

        container.append(salaryElement, infoElement, descriptionSection, iconSection);

        return container
    }
}

export default JobOfferItem;