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

  static addListItem() {
    // HW
  }

  static displayBudget(data = {}) {
    const { totalExpenses = 0, totalIncomes = 0, total = 0 } = data;

    document.querySelector(DOM_ELEMENTS.budgetLabel).innerHTML = total;
    document.querySelector(DOM_ELEMENTS.incomeLabel).innerHTML = totalIncomes;
    document.querySelector(DOM_ELEMENTS.expensesLabel).innerHTML = totalExpenses;
  }
}
export default View;

