import Question from "./question";

export default interface Quiz {
  id: number;
  name: string;
  questions?: [Question];
}
