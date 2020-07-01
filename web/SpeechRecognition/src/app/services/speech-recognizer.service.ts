import {Injectable} from '@angular/core';
import {SpeechRecognizer} from 'microsoft-cognitiveservices-speech-sdk';
import {RecognitionResult} from '../models/recognition-result';
import {SpeechConfigFactory} from './speech-config-factory.service';

@Injectable({
  providedIn: 'root'
})

export class SpeechRecognizerService {
  private readonly recognizer = new SpeechRecognizer(SpeechConfigFactory.config);

  public recognizeOnceAsync() {
    return this.recognize(this.recognizer);
  }

  private recognize(recognizer) {
    return recognizer.recognizeOnceAsync(onSuccess, onFailure);

    function onSuccess(result) {
      console.log('Success', result);
      recognizer.close();
      return RecognitionResult.success(result.text);
    }

    function onFailure(err) {
      console.log('Error', err);
      recognizer.close();
      return RecognitionResult.failure(err);
    }
  }
}
