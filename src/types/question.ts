import Answer from "./answer";

export default interface Question {
  id: number;
  quizId: number;
  title: string;
  answers?: Answer[];
}
