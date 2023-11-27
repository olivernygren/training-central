import { Exercise } from "./exercise";
import { Note } from "./general";
import { WeekdayEnum, WorkoutStatusEnum } from "../enums/workout";
import { MuscleGroupEnum } from "../enums/muscle-group";

export interface Workout {
  documentId: string;
  name: string;
  exercises: Array<Exercise>;
  description?: string;
  notes?: Array<Note>;
  weekdayLabel?: WeekdayEnum;
  muscleGroups: Array<MuscleGroupEnum>;
  position: number;
  status: WorkoutStatusEnum;
}

// export interface WorkoutInstance {
//   documentId: string;
//   name: string;
//   exercises: Array<Exercise>;
//   description?: string;
//   notes?: Array<Note>;
//   weekdayLabel?: WeekdayEnum;
//   muscleGroups: Array<MuscleGroupEnum>;
//   position: number;
// }
