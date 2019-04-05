export const DOM_ELEMENTS = {
  inputType: "#selector",
  inputDescription: "#input-description",
  inputValue: "#input-value",
  submitBtn: "#btn-submit",
  incomesContainer: "#incomes-list",
  expensesContainer: "#expenses-list",
  budgetLabel: ".header-budget",
  incomeLabel: ".budget-block--income .budget-block-value",
  expensesLabel: ".budget-block--expense .budget-block-value",
};

class View {
  static getInputData() {
    return {
      type: document.querySelector(DOM_ELEMENTS.inputType).value,
      description: document.querySelector(DOM_ELEMENTS.inputDescription).value,
      value: document.querySelector(DOM_ELEMENTS.inputValue).value
    };
  }

  static addListItem(item, type) {
    const html = item.render();
    if (type === "inc") {
      document.querySelector(DOM_ELEMENTS.incomesContainer).insertAdjacentHTML("beforeend", html);
    } else if(type === "exp") {
      document.querySelector(DOM_ELEMENTS.expensesContainer).insertAdjacentHTML("beforeend", html);
    } else {
      console.log("Wrong type!!!");
    }
  }

  static displayBudget(data = {}) {
    const { totalExpenses = 0, totalIncomes = 0, total = 0 } = data;

    document.querySelector(DOM_ELEMENTS.budgetLabel).innerHTML = total;
    document.querySelector(DOM_ELEMENTS.incomeLabel).innerHTML = totalIncomes;
    document.querySelector(DOM_ELEMENTS.expensesLabel).innerHTML = totalExpenses;
  }

  static clearInputs() {
    document.querySelector(DOM_ELEMENTS.inputDescription).value = "";
    document.querySelector(DOM_ELEMENTS.inputValue).value = "";
  }
}
export default View;

