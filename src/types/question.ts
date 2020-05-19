import Answer from "./answer";

export default interface Question {
  id: number;
  title: string;
  answers: [Answer];
}
