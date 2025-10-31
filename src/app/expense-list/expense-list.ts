import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../expense.service';
import { Expense } from '../expense.model';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-list.html',
  styleUrls: ['./expense-list.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];
  totalAmount: number = 0;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expenseService.getExpenses().subscribe(data => {
      this.expenses = data;
      this.calculateTotal();
    });
  }

  deleteExpense(id: string) {
    if (confirm('Are you sure?')) {
      this.expenseService.deleteExpense(id).subscribe(() => {
        this.loadExpenses();
      });
    }
  }

  calculateTotal() {
    this.totalAmount = this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }
}