import { Component, OnInit } from '@angular/core';
import { SpeechRecognizerService} from './services/speech-recognizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'SpeechRecognition';
  ngOnInit(): void {
  }

  constructor(private speechRecognizerService: SpeechRecognizerService) {
  }

  recognize(){
    this.speechRecognizerService.recognizeOnceAsync();
  }
}
