import { Set } from "./exercise";
import { Note } from "./general";

export interface ProgressLog {
  date: Date;
  performedSets: Array<Set>;
  note?: Note;
}
