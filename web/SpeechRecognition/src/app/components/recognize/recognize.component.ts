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
  }

  public async recognize(): Promise<any> {
    this.isRecognizing = true;
    const todo = await this.toDoFactory.createToDoItem();
    this.toDos.push(todo);
    this.isRecognizing = false;
    return undefined;
  }

}
