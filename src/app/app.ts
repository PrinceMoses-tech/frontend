import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpenseComponent } from './add-expense/add-expense';
import { ExpenseListComponent } from './expense-list/expense-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddExpenseComponent, ExpenseListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Expense Tracker';
}