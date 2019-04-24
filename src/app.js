import Budget from "./models/Budget";
import View, { DOM_ELEMENTS } from "./View";

class Application {
    constructor() {
        this.budget = new Budget();
    }

    init() {
        View.month();
        View.displayBudget();
        this.setupEventListeners();
        
    }

    setupEventListeners() {
        document.querySelector(DOM_ELEMENTS.submitBtn).addEventListener("click", () => { this.addItem(); });
        document.querySelector(DOM_ELEMENTS.budgetContent).addEventListener("click",  (event) => {this.removeItem(event);} );
    }

    addItem() {

        const inputData = View.getInputData();
        const isValid = this.validateUserData(inputData);

        if (isValid) {
            const { type, description, value } = inputData;
            const item = this.budget.addItem(type, description, value);
            View.displayBudget({
                totalExpenses: this.budget.totalExpenses,
                totalIncomes: this.budget.totalIncomes,
                total: this.budget.total
            });

            View.addListItem(item, type);
            View.clearInput();
            View.percent({
                totalExpenses: this.budget.totalExpenses,
                totalIncomes: this.budget.totalIncomes,
                total: this.budget.total
            });
        }
    }


    removeItem(event) { 
        const buttonParent = event.target.parentNode.parentNode;
        const iconParent = buttonParent.parentNode;
        const id = buttonParent.dataset.id || iconParent.dataset.id;
        if(id){
            const type = buttonParent.dataset.type || iconParent.dataset.type;

            View.removeListItem(id,type);
            this.budget.deleteItem(type, Number(id));

            View.displayBudget({
                totalExpenses: this.budget.totalExpenses,
                totalIncomes: this.budget.totalIncomes,
                total: this.budget.total
            });
             View.percent({
                totalExpenses: this.budget.totalExpenses,
                totalIncomes: this.budget.totalIncomes,
                total: this.budget.total
            });
        }
    }

    validateUserData(inputData) {
        const { type, description, value } = inputData;

        if (value.match(/^[-\+]?\d+?/) === null) { View.errorMessage(1);}
        if (description.match(/\S+/) === null) { View.errorMessage(2); }

        if ((value.match(/^[-\+]?\d+/) === null) || (description.match(/\S+/) === null)) {
            return false;
        }
        return true;
    }


}

const app = new Application();
export default app;