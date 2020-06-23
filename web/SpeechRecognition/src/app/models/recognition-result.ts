export class RecognitionResult {

  constructor(text, success) {
  }

  public readonly Text;
  public readonly Success;


  public static Success(text) {
    return new RecognitionResult(text, true)
  }

  public static Failure(text) {
    return new RecognitionResult(text, false)
  }
}
