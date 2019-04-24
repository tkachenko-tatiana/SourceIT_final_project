export const DOM_ELEMENTS = {
    inputType: "#selector",
    inputDescription: "#input-description",
    inputValue: "#input-value",
    submitBtn: "#btn-submit",
    btnDelete: "#btn-delete",
    incomesContainer: "#list-income",
    expensesContainer: "#list-expenses",
    budgetLabel: ".header-budget",
    incomeLabel: ".budget-block--income .budget-block-value",
    expensesLabel: ".budget-block--expense .budget-block-value",
    month: "#month",
    budgetContent: "#budget-content",
    percent: ".percent"
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
        } else if (type === "exp") {
            document.querySelector(DOM_ELEMENTS.expensesContainer).insertAdjacentHTML("beforeend", html);
        } else {
            console.log("Wrong type!!!");
        }

    }

    static removeListItem(id, type) {
        const item = document.querySelector(`[data-id = '${id}'][data-type ='${type}']`);
        item.remove();
    }


    static displayBudget(data = {}) {
        const { totalExpenses = 0, totalIncomes = 0, total = 0 } = data;

        document.querySelector(DOM_ELEMENTS.budgetLabel).innerHTML = total;
        document.querySelector(DOM_ELEMENTS.incomeLabel).innerHTML = totalIncomes;
        document.querySelector(DOM_ELEMENTS.expensesLabel).innerHTML = totalExpenses;
    }

    static clearInput(inputData) {
        document.querySelector(DOM_ELEMENTS.inputDescription).value = "",
            document.querySelector(DOM_ELEMENTS.inputValue).value = ""

    }

    static errorMessage(err) {
        let description = document.querySelector(DOM_ELEMENTS.inputDescription);
        let value = document.querySelector(DOM_ELEMENTS.inputValue);

        const errorPlace = document.getElementById("error-div");
        const div = document.createElement('div');

        div.className = 'error';

        if (err == 1) {
            div.innerHTML = "Введите число в поле значение";
            errorPlace.appendChild(div);
            value.onfocus = function() {
                errorPlace.removeChild(div);
            }
        } else if (err == 2) {
            div.innerHTML = "Введите описание!";
            errorPlace.appendChild(div);
            description.onfocus = function() {
                errorPlace.removeChild(div);
            }
        } else {
            errorPlace.removeChild(div);
        }

    }


    static month() {
        let date = new Date();
        let month = date.getMonth();
        const monthArr = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        let currentMonth = monthArr[month];
        document.querySelector(DOM_ELEMENTS.month).innerHTML = currentMonth;
    }

    static percent({ totalExpenses, totalIncomes, total }) {
        let percent = Math.round((totalExpenses * 100) / totalIncomes);
        let perRounded = parseFloat(percent.toFixed(3));
        document.querySelector(DOM_ELEMENTS.percent).innerHTML = perRounded;
    }
}

export default View;