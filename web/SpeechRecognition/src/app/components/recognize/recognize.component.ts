import { Component, OnInit } from '@angular/core';

import {TodoItem} from "../../models/todo-item";
import {ToDoFactory} from "../../services/to-do-factory";

@Component({
  selector: 'app-recognize',
  templateUrl: './recognize.component.html',
  styleUrls: ['./recognize.component.css']
})
export class RecognizeComponent implements OnInit {

  public isRecognizing = false;
  public message = '... Please click the button and start saying :)';
  public toDos = new Array<TodoItem>();
  private toDoFactory : ToDoFactory;

  constructor(toDoFactory :ToDoFactory) {
    this.toDoFactory = toDoFactory;
  }

  ngOnInit(): void {
  }

  public async recognize() : Promise<any>{
    this.isRecognizing = true;
    let todo = await this.toDoFactory.createToDoItem();
    this.toDos.push(todo);
    this.isRecognizing = false;
    console.log(this.toDos)
    return undefined;
  }

}
