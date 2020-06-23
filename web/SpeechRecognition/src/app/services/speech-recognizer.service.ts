import {Injectable} from '@angular/core';
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import {RecognitionResult} from "../models/recognition-result";

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognizerService {
  private readonly speechConfig = undefined;
  private readonly recognizer = undefined;
  private readonly subscriptionKey = "2bee747b293042db95ef906b195950c1";
  private readonly serviceRegion = "westeurope";

  constructor() {
    this.speechConfig = sdk.SpeechConfig.fromSubscription(this.subscriptionKey, this.serviceRegion);
    this.speechConfig.speechRecognitionLanguage = "en-US";
    this.recognizer = new sdk.SpeechRecognizer(this.speechConfig);
  }

  public recognizeOnceAsync() {
    return this.recognize(this.recognizer)
  }

  private recognize(recognizer) {
    recognizer.recognizeOnceAsync(
      function (result) {
        window.console.log(result.text);
        recognizer.close();
        return RecognitionResult.Success(result.text);
      },
      function (err) {
        window.console.log(err);
        return RecognitionResult.Failure(err)
      });
  }
}
