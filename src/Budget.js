import Income from "./Income";
import Expense from "./Expense";
import { calculateId, calculateMoney } from "./helper";

class Budget {
  constructor() {
    this.expenses = [];
    this.incomes = [];
    this.totalExpenses = 0;
    this.totalIncomes = 0;
    this.total = 0;
  }

  addItem(type, description, value) {
    if (type === "inc") {
      const inc = new Income(calculateId(this.incomes), description, value);
      this.incomes.push(inc);
    } else if (type === "exp") {
      const exp = new Expense(calculateId(this.expenses), description, value);
      this.expenses.push(exp);
    } else {
      console.log("Wrong type!!!");
    }
    this.calculateBudget();
  }

  deleteItem(type, id) {
    if (type === "inc") {
      this.incomes = this.incomes.filter(item => item.id === id);
    } else if (type === "exp") {
      this.expenses = this.expenses.filter(item => item.id === id);
    } else {
      console.log("Wrong type!!!");
    }
    this.calculateBudget();
  }

  calculateBudget() {
    this.totalIncomes = calculateMoney(this.incomes);
    this.totalExpenses = calculateMoney(this.expenses);
    this.total = this.totalIncomes - this.totalExpenses;
  }
}
export default Budget;