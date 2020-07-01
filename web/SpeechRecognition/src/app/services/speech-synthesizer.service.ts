import { Injectable } from '@angular/core';
import { SpeechSynthesizer} from "microsoft-cognitiveservices-speech-sdk";
import {SpeechConfigFactory} from "./speech-config-factory";

@Injectable({
  providedIn: 'root'
})
export class SpeechSynthesizerService {
  private readonly synthesizer = new SpeechSynthesizer(SpeechConfigFactory.config);

  public async synthesize(text: string, sleep: number): Promise<any> {
    this.synthesizer.speakTextAsync(text)
    return this.sleep(sleep)
  }

  public close(){
    this.synthesizer.close();
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || 1500));
  }


}
