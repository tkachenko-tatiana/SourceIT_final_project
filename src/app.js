import Budget from "./Budget";

class Application {
  constructor() {
    this.budget = new Budget();
  }

  init() {
    console.log("Application has started.");
    console.log("Start: ", this);
    this.budget.addItem("inc", "Salary", 3000);
    console.log("1: ", this.budget);
    this.budget.addItem("inc", "Some money", 500);
    this.budget.addItem("inc", "And again some money", 1000);
    this.budget.addItem("exp", "Ice cream", 100);
    this.budget.addItem("exp", "Burger", 200);
    console.log("2: ", this.budget);
    this.budget.deleteItem("exp", 1);
    console.log("3: ", this.budget);
  }
}

const app = new Application();
export default app;