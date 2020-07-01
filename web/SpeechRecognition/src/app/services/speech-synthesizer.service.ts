import { Injectable } from '@angular/core';
import { SpeechSynthesizer} from "microsoft-cognitiveservices-speech-sdk";
import {SpeechConfigFactory} from "./speech-config-factory";
import {SpeechSynthesisResult} from "microsoft-cognitiveservices-speech-sdk/distrib/lib/src/sdk/Exports";

@Injectable({
  providedIn: 'root'
})
export class SpeechSynthesizerService {
  private readonly synthesizer = new SpeechSynthesizer(SpeechConfigFactory.config);

  async synthesize(text: string, sleep: number): Promise<any> {
    this.synthesizer.speakTextAsync(text)
    return this.sleep(sleep)
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || 1500));
  }

}
