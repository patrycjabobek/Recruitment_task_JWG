import './styles/style.scss';
import FAQItem from "./components/FAQItem";
import FAQSection from "./components/FAQSection";
import {faqEmployerQuestions} from './data/faqEmployerQuestions';
import {faqEmployeeQuestions} from './data/faqEmployeeQuestions';

const faqEmployerSection = new FAQSection('faqEmployerList');
const faqEmployeeSection = new FAQSection('faqEmployeeList');

faqEmployerQuestions.map(item => {
  faqEmployerSection.addFAQItem(new FAQItem(item.question, item.answer))
})

faqEmployeeQuestions.map(item => {
  faqEmployeeSection.addFAQItem(new FAQItem(item.question, item.answer))
})

faqEmployerSection.render();
faqEmployeeSection.render();

// menu nav
let pageNav = document.querySelector(".page-nav"),
  burgerBtn = document.getElementById("burger-menu"),
  openIcon = document.querySelector(".open"),
  closeIcon = document.querySelector(".close"),
  nav = document.getElementById("links");

burgerBtn.addEventListener("click", () => {
  openIcon.style.display = openIcon.style.display === "none" ? "block" : "none";
  closeIcon.style.display =
    closeIcon.style.display === "none" ? "block" : "none";

  nav.style.display === "block"
    ? (nav.style.display = "none") &&
      (pageNav.style.backgroundColor = "#F5CDD5")
    : (nav.style.display = "block") &&
      (pageNav.style.backgroundColor = "#26BBE1");
});
