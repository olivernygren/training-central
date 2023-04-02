import { Weekday, WorkoutPerformanceEvaluationOptions, WorkoutSorenessEvaluationOptions } from "./enums";
import { ExerciseInstance } from "./exercise";
import { MuscleGroup } from "./muscleGroup";
import { Program } from "./program";

export interface Workout {
  createdAt: string;
  description?: string;
  documentId: string;
  exercises: Array<ExerciseInstance>;
  name: string;
  program: Program;
  // progressionType: ProgressionTypeEnum;
  targetMuscleGroups: Array<MuscleGroup>;
  weekday?: Weekday;
  // progress: WorkoutProgressSegment;
}

export interface WorkoutInstance {
  workout: Workout;
  completed: boolean;
  evaluated: boolean;
  evaluation?: WorkoutEvaluation;
  iteration?: number; // n:th time the workout is repeated in the program
}

// Used in the Set Progression Algorithm to detect MRV
// For each session last week:
export interface WorkoutEvaluation {
  soreness: WorkoutSorenessEvaluationOptions;
  performance: WorkoutPerformanceEvaluationOptions;
}