import { SetLoad } from "./exercise";

export interface ExerciseProgressInstance {
  weight: SetLoad;
  reps: number;
}

export interface ExerciseProgressSegment {
  date: Date;
  progressInstances: Array<ExerciseProgressInstance>;
  progressMade?: boolean;
  notes?: string;
}