import { Injectable } from '@angular/core';
import {SpeechSynthesizer} from "microsoft-cognitiveservices-speech-sdk";
import {SpeechConfigFactory} from "./speech-config-factory.service";

@Injectable({
  providedIn: 'root'
})
export class SpeechSynthesizerService {
  private readonly synthesizer = new SpeechSynthesizer(SpeechConfigFactory.config);

  public synthesize (text){
    this.synthesizer.speakTextAsync(text);
  }
}
