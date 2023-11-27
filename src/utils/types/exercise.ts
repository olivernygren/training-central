import { type } from "os";
import { EquipmentEnum } from "../enums/equipment";
import { MuscleGroupEnum } from "../enums/muscle-group";
import { SetType } from "../enums/exercise";
import { Note } from "./general";
import { ProgressLog } from "./progress";

export interface Exercise {
  documentId: string;
  name: string;
  description?: string;
  mainMuscleGroup: MuscleGroupEnum;
  muscleGroups?: Array<MuscleGroupEnum>;
  instruction?: string;
  videoUrl?: string;
  equipment: EquipmentEnum;
  systemicFatigue: number; // 1-10
  sorenessInducing: number; // 1-10
  isCustom: boolean;
  tags?: Array<string>;
  progressLogs?: Array<ProgressLog>;
  timesPerformed: number;
}

export interface ExerciseInstance {
  exercise: Exercise;
  setType: SetType;
  sets?: Array<Set>;
  isCompleted: boolean;
  notes?: Array<Note>;
  position: number; // Position in workout
}

export interface Set {
  usedLoad?: number;
  performedReps?: number;
  isLogged: boolean;
  type: SetType;
  skipped?: boolean;
  targetRepRange?: string;
}
