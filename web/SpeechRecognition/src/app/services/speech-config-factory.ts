import { Injectable } from '@angular/core';
import {SpeechConfig} from "microsoft-cognitiveservices-speech-sdk";

@Injectable({
  providedIn: 'root'
})
export class SpeechConfigFactory {
  //TODO: Move to env variable
  private static readonly subscriptionKey = "2bee747b293042db95ef906b195950c1";
  private static readonly serviceRegion = "westeurope";

  constructor() { }

  static get config() : SpeechConfig {
    let speechConfig = SpeechConfig.fromSubscription(this.subscriptionKey, this.serviceRegion);
    speechConfig.speechRecognitionLanguage = "en-US";
    return speechConfig;
  }
}
