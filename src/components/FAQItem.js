class FAQItem {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    this.htmlElement = null;
  }

  createComponent() {
    const container = document.createElement("div");
    container.classList.add("collapsible__container");

    const questionElement = document.createElement("button");
    questionElement.textContent = this.question;

    const arrowIcon = this.createArrowIcon();
    questionElement.appendChild(arrowIcon);
    container.appendChild(questionElement);

    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.textContent = this.answer;
    container.appendChild(answerElement);

    container.addEventListener("click", () => this.toggleAnswer());

    return container;
  }

  createArrowIcon() {
    const iconSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );

    iconSvg.setAttribute("width", "40");
    iconSvg.setAttribute("height", "41");
    iconSvg.setAttribute("viewBox", "0 0 40 41");
    iconSvg.setAttribute("fill", "none");

    iconSvg.appendChild(
      this.getNode("rect", {
        x: "22.6279",
        y: "11.9125",
        width: "15.9756",
        height: "3.55558",
        transform: "rotate(135 22.6279 11.9125)",
        fill: "white",
      })
    );
    iconSvg.appendChild(
      this.getNode("rect", {
        x: "11.3145",
        y: "23.226",
        width: "16.0001",
        height: "3.55014",
        transform: "rotate(-135 11.3145 23.226)",
        fill: "white",
      })
    );

    return iconSvg;
  }

  getNode(n, v) {
    n = document.createElementNS("http://www.w3.org/2000/svg", n);
    for (var p in v)
      n.setAttributeNS(
        null,
        p.replace(/[A-Z]/g, function (m, p, o, s) {
          return "-" + m.toLowerCase();
        }),
        v[p]
      );
    return n;
  }

  toggleAnswer() {
    if (this.htmlElement) {
      const answerElement = this.htmlElement.querySelector(".answer");
      answerElement.style.display =
        answerElement.style.display === "block" ? "none" : "block";
    }
  }
}

export default FAQItem;
