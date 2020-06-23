export class RecognitionResult {

  constructor(text, success) {
  }

  public readonly Text;
  public readonly Success;


  public static success(text) {
    return new RecognitionResult(text, true)
  }

  public static failure(text) {
    return new RecognitionResult(text, false)
  }
}
