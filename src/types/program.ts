import { DesiredProgressGoal, ProgramScheduleType, ProgressionTypeEnum } from "./enums";
import { Workout, WorkoutInstance } from "./workout";

export interface Program {
  desiredProgressGoal?: DesiredProgressGoal;
  name: string;
  description?: string;
  scheduleType?: ProgramScheduleType;
  progressionType?: ProgressionTypeEnum;
  workouts: Array<WorkoutInstance>;
  numberOfWeeks?: number;
  active: boolean;
}

export interface Microcycle {
  length: number;
}

export interface Mesocycle {
  microcycles: number;
}

export interface TrainingBlock {
  mesocycles: number;
}