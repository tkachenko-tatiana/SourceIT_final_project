import Budget from "./models/Budget";
import View, { DOM_ELEMENTS } from "./View";

class Application {
  constructor() {
    this.budget = new Budget();
  }

  init() {
    // setup month

    // setup initial budget
    View.displayBudget();

    // add listeners
    this.setupEventListeners();
  }

  setupEventListeners() {
    document.querySelector(DOM_ELEMENTS.submitBtn).addEventListener("click", () => { this.addItem(); });
  }

  addItem() {
    // get data from inputs
    const inputData = View.getInputData();
    const isValid = this.validateUserData(inputData);
    
    if (isValid) {
      // add item
      const { type, description, value } = inputData;
      this.budget.addItem(type, description, value);

      // display item

      // clear inputs

      // get and display budget
      console.log(this.budget);
      View.displayBudget({
        totalExpenses: this.budget.totalExpenses,
        totalIncomes: this.budget.totalIncomes, 
        total: this.budget.total
      });
    } else {
      //HW
    }
  }

  validateUserData(data) {
    return true; // remove this line after you version is ready
    //HW
  }
}

const app = new Application();
export default app;