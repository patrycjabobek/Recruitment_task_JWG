import SvgIcon from "./SvgIcon";

class FAQItem {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    this.htmlElement = this.createComponent();
    this.setupEventListeners();
  }

  createComponent() {
    const container = document.createElement("div");
    container.classList.add("collapsible__container");

    const questionElement = document.createElement("button");
    questionElement.classList.add("question");

    const svgContent =
      '<rect x="22.6279" y="11.9125" width="15.9756" height="3.55558" transform="rotate(135 22.6279 11.9125)" fill="white"></rect><rect x="11.3145" y="23.226" width="16.0001" height="3.55014" transform="rotate(-135 11.3145 23.226)" fill="white"></rect>';
    const arrowIcon = new SvgIcon({
      iconName: "simpleArrowDown",
      width: 40,
      height: 41,
      viewBox: "0 0 40 41",
      color: "none",
      svgContent: svgContent,
    });
    arrowIcon.render(questionElement);

    const questionText = document.createTextNode(this.question);
    questionElement.appendChild(questionText);
    container.appendChild(questionElement);

    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.textContent = this.answer;
    container.appendChild(answerElement);

    return container;
  }

  setupEventListeners() {
    this.htmlElement
      .querySelector(".question")
      .addEventListener("click", () => {
        this.toggleAnswer();
      });
  }

  toggleAnswer() {
    const answer = this.htmlElement.querySelector(".answer");
    answer.style.display = answer.style.display === "block" ? "none" : "block";

    console.log(`Toggled answer for question: ${this.question}`);
  }
}

export default FAQItem;
