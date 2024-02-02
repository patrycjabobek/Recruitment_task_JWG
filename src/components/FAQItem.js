import SvgIcon from "./SvgIcon";

class FAQItem {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    this.htmlElement = this.createComponent();
  }

  createComponent() {
    const container = document.createElement("div");
    container.classList.add("collapsible__container");

    const questionElement = document.createElement("button");
    questionElement.classList.add("question");

    const svgContent =
      '<rect x="22.6279" y="11.9125" width="15.9756" height="2" transform="rotate(135 22.6279 11.9125)" fill="white"></rect><rect x="11.3145" y="23.226" width="16.0001" height="2" transform="rotate(-135 11.3145 23.226)" fill="white"></rect>';
    const arrowIcon = new SvgIcon({
      iconName: "simpleArrowDown",
      width: 40,
      height: 30,
      color: "none",
      className: 'arrow',
      svgContent: svgContent,
    });
    arrowIcon.render(questionElement);
    
    const questionText = document.createElement('h3');
    questionText.textContent = this.question;
    questionElement.appendChild(questionText);
    container.appendChild(questionElement);

    questionElement.addEventListener('click', () => this.toggleAnswer())

    const answerElement = document.createElement("div");
    answerElement.classList.add("answer", "hidden");
    answerElement.textContent = this.answer;
    
    container.appendChild(answerElement);

    return container;
  }

  toggleAnswer() {
    const answer = this.htmlElement.querySelector(".answer");
    answer.classList.toggle('hidden');
  }
}

export default FAQItem;
