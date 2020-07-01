export class RecognitionResult {

  constructor(text: string, success: boolean) {
    this.Text = text;
    this.Success = success;
  }

  public readonly Text: string;
  public readonly Success: boolean;


  public static success(text) {
    return new RecognitionResult(text, true)
  }

  public static failure(text) {
    return new RecognitionResult(text, false)
  }
}
