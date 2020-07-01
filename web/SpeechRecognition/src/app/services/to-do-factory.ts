import {Injectable} from '@angular/core';
import {SpeechRecognizerService} from "./speech-recognizer.service";
import {SpeechSynthesizerService} from "./speech-synthesizer.service";
import {RecognitionResult} from "../models/recognition-result";
import {TodoItem} from "../models/todo-item";

@Injectable({
  providedIn: 'root'
})
export class ToDoFactory {

  private  recognizer : SpeechRecognizerService;
  private  synthesizer : SpeechSynthesizerService;

  constructor() {
  }

  public async createToDoItem(): Promise<TodoItem> {
    this.recognizer = new SpeechRecognizerService()
    this.synthesizer = new SpeechSynthesizerService()
    let toDoResult = await this.getToDoResult()

    if (!toDoResult.Success) {
      await this.synthesizer.synthesize(toDoResult.Text, 1500)
      return undefined;
    }
    let dateResult = await this.getDate()
    if (dateResult === null) {
      await this.synthesizer.synthesize("Can not recognize. Please try again later.", 1500)
      return undefined;
    }
    this.synthesizer.close();
    this.recognizer.close();
    return new TodoItem(toDoResult.Text, dateResult)
  }

  private async getDate(): Promise<Date> {
    await this.synthesizer.synthesize("When do you want to do that?", 1500)
    for (let i = 0; i < 3; i++) {
      let toDoResult = await this.recognizer.recognizeAsync()
      console.log(toDoResult.Text)

      if (toDoResult.Success) {
        let result = toDoResult.Text.toLowerCase();
        switch (result.replace('.','')) {
          case 'today':
            return new Date();
          case 'tomorrow':
            let date = new Date()
            date.setDate(date.getDate() + 1)
            return date;
          case 'someday':
            return undefined;
        }
      }
      await this.synthesizer.synthesize("Please try again. When do you want to do that?", 3500)
    }
    return null;
  }

  private async getToDoResult(): Promise<RecognitionResult> {
    await this.synthesizer.synthesize("What do you want to do?", 1500)
    for (let i = 0; i < 3; i++) {
      let result = await this.recognizer.recognizeAsync();

      if (result.Success) {
        return result;
      }
      await this.synthesizer.synthesize("Please try again. What do you want to do?", 3500)
    }
    return RecognitionResult.failure("Can not recognize. Please try again later.");
  }
}
