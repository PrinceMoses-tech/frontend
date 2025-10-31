import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-expense.html',
  styleUrls: ['./add-expense.css']
})
export class AddExpenseComponent {
  newExpense: Expense = {
    title: '',
    amount: 0,
    category: 'Food',
    date: new Date()
  };

  categories = ['Food', 'Transport', 'Entertainment', 'Bills', 'Shopping', 'Other'];

  constructor(private expenseService: ExpenseService) { }

  addExpense() {
    if (this.newExpense.title && this.newExpense.amount > 0) {
      this.expenseService.addExpense(this.newExpense).subscribe(() => {
        this.newExpense = { title: '', amount: 0, category: 'Food', date: new Date() };
        window.location.reload();
      });
    }
  }
}