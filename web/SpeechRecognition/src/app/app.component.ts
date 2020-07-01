import {Component, OnInit} from '@angular/core';
import {ToDoFactory} from "./services/to-do-factory";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'SpeechRecognition';
  ngOnInit(): void {
  }
  constructor(private toDoFactory: ToDoFactory) {  }

  async recognize(){
    await this.toDoFactory.createToDoItem();
  }
}
