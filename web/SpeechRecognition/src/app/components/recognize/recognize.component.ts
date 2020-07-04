import { Component, OnInit } from '@angular/core';

import { TodoItem } from '../../models/todo-item';
import { ToDoFactory } from '../../services/to-do-factory';

@Component({
  selector: 'app-recognize',
  templateUrl: './recognize.component.html',
  styleUrls: ['./recognize.component.css']
})
export class RecognizeComponent implements OnInit {

  public isRecognizing = false;
  public toDos: TodoItem[] = [];
  public toDosFiltered: TodoItem[] = [];
  public todayDate = new Date();

  constructor(private toDoFactory: ToDoFactory) {
  }

  ngOnInit(): void {
    this.toDos = [
      {
        Date: new Date(),
        Id: '133',
        Text: 'Something'
      },
      {
        Date: new Date(2019, 3, 4),
        Text: 'Nothing special',
        Id: '444'
      }
    ];

    this.toDosFiltered = this.toDos;
  }

  public async recognize(): Promise<any> {
    this.isRecognizing = true;
    const todo = await this.toDoFactory.createToDoItem();
    this.toDos.push(todo);
    this.isRecognizing = false;
    this.filterDays('all');
    return undefined;
  }

  filterDays(days: String): void {
    let tommorow = new Date(this.todayDate.getTime() + 24 * 60 * 60 * 1000);

    switch (days) {
      case 'today':
        this.toDosFiltered = this.toDos.filter(x => x.Date.toLocaleDateString() == this.todayDate.toLocaleDateString());
        break;
      
      case 'tommorow':
        this.toDosFiltered = this.toDos.filter(x => x.Date.toLocaleDateString() == tommorow.toLocaleDateString());
        break;

      case 'all':
        this.toDosFiltered = this.toDos;
        break;
    }
  }


  

}
