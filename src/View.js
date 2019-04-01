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

        let type = document.querySelector(DOM_ELEMENTS.inputType).value;
        let description = document.querySelector(DOM_ELEMENTS.inputDescription).value;
        let value = document.querySelector(DOM_ELEMENTS.inputValue).value;

        if (type == "inc") {
            const list = document.getElementById("list-income");
            const li = document.createElement("li");
            li.innerHTML = description + " " + value;
            list.appendChild(li);
        } else  {
            const list = document.getElementById("list-expenses");
            const li = document.createElement("li");
            li.innerHTML = description + " " + value;
            list.appendChild(li);

        }

    }


    static displayBudget(data = {}) {
        const { totalExpenses = 0, totalIncomes = 0, total = 0 } = data;

        document.querySelector(DOM_ELEMENTS.budgetLabel).innerHTML = total;
        document.querySelector(DOM_ELEMENTS.incomeLabel).innerHTML = totalIncomes;
        document.querySelector(DOM_ELEMENTS.expensesLabel).innerHTML = totalExpenses;
    }
}
export default View;