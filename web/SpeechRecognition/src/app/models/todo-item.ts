import * as uuid from 'uuid';

export class TodoItem {
  constructor(text: string, date : Date) {
    this.Text = text;
    this.Date = date;
    this.Id = uuid.v4();
    this.IsDone = false;
  }

  public Text : string;
  public Date : Date;
  public Id : string;
  public IsDone: boolean;

}
