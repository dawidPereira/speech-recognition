import { Injectable } from '@angular/core';
import { SpeechConfig } from 'microsoft-cognitiveservices-speech-sdk';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeechConfigFactory {

  constructor() {
  }

  static get config(): SpeechConfig {
    const speechConfig = SpeechConfig.fromSubscription(environment.subscriptionKey, environment.serviceRegion);
    speechConfig.speechRecognitionLanguage = 'en-US';
    return speechConfig;
  }
}
