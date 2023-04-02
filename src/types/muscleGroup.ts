import { MuscleGroupEnum } from "./enums";

export interface MuscleGroup {
  name: MuscleGroupEnum;
  color: string;
  subGroups: Array<SubMuscleGroup>;
}

export interface SubMuscleGroup {
  name: MuscleGroupEnum;
  color: string;
}