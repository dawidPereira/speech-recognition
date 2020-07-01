import { Component, OnInit } from '@angular/core';

import { SpeechRecognizer } from 'microsoft-cognitiveservices-speech-sdk';
import { SpeechConfigFactory } from '../../services/speech-config-factory.service';

@Component({
  selector: 'app-recognize',
  templateUrl: './recognize.component.html',
  styleUrls: ['./recognize.component.css']
})
export class RecognizeComponent implements OnInit {

  public isRecognizing = false;
  public message = '... Please click the button and start saying :)';

  constructor() {
  }

  ngOnInit(): void {
  }

  recognize(): void {
    this.isRecognizing = true;
    const recognizer = new SpeechRecognizer(SpeechConfigFactory.config);
    recognizer.recognizeOnceAsync(result => {
      this.message = result.text;
      this.isRecognizing = false;
      recognizer.close();
    }, (err) => {
      this.message = err;
      this.isRecognizing = false;
      recognizer.close();
    });
  }

}
