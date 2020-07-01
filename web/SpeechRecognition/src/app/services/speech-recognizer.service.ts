import {Injectable} from '@angular/core';
import {SpeechRecognizer} from "microsoft-cognitiveservices-speech-sdk";
import {RecognitionResult} from "../models/recognition-result";
import {SpeechConfigFactory} from "./speech-config-factory";

@Injectable({
  providedIn: 'root'
})

export class SpeechRecognizerService {
  private readonly recognizer = new SpeechRecognizer(SpeechConfigFactory.config);

  public async recognizeAsync() : Promise<RecognitionResult> {
    return await this.recognize(this.recognizer);
  }

  public recognize(recognizer: SpeechRecognizer): Promise<RecognitionResult> {
    return new Promise((resolve, reject) => {
      recognizer.recognizeOnceAsync(
        (result) => resolve(RecognitionResult.success(result.text)),
        (err) => reject(RecognitionResult.failure(err))
      );
    });
  }

  public close(){
    this.recognizer.close()
  }
}
