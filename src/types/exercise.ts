import { EquipmentEnum, ExerciseTagEnum, LoadingRangeEnum, SetIntensityType, SetType, WeightUnitEnum } from "./enums";
import { MuscleGroup } from "./muscleGroup";
import { ExerciseProgressSegment } from "./progress";

export interface Exercise {
  name: string;
  targetMuscleGroups: Array<MuscleGroup>;
  equipment?: EquipmentEnum;
}

export interface PersonalExerciseInformation {
  exercise: Exercise;
  progress: Array<ExerciseProgressSegment>;
  adjustmentSettings?: ExerciseAdjustmentSettings;
  currentSFR?: number;
  preferredRepRange?: string;
}

export interface ExerciseInstance {
  exercise: Exercise;
  notes?: string;
  sets: string;
  repRange: string;
  primaryMuscleGroup?: MuscleGroup;
  tags?: Array<ExerciseTagEnum>;
  swappableExercise?: Exercise;
  loadingRange?: LoadingRangeEnum;
  evaluated: boolean;
  completed: boolean;
  evaluation?: ExerciseVolumeFeedback;
  unit?: WeightUnitEnum;
}

export interface ExerciseAdjustmentSettings {
  seatPosition?: string;
  backSupportPostion?: string;
  safteyPinPosition?: string;
  thighPadPosition?: string;
  footPadPostion?: string;
  rackPostion?: string;
  benchInclinePostion?: string;
  cableVerticalAttachmentPosition?: string;
  cableHorizontalAttachmentPostion?: string;
  handlePostion?: string;
}

export interface Set {
  repRange: string;
  load?: SetLoad;
  RIR?: number;
  loadingRange?: LoadingRangeEnum;
  type?: SetType;
  intensityType?: SetIntensityType;
}

export interface SetLoad {
  weight: number;
  unit: WeightUnitEnum;
}

export interface ExerciseVolumeFeedback {
  pump: number;
  performance: number;
  disruption: number;
}

export interface ExerciseStimulus {
  mindMuscleConnection: number;
  pump: number;
  disruption: number;
}

export interface ExerciseFatigue {
  jointFatigue: number;
  RPE: number;
  unusedMuscleStrengthDecline: number;
}

// RP video: SFR quick guide / Advanced SFR implications
export interface ExerciseSFR {
  stimulus: ExerciseStimulus;
  fatigue: ExerciseFatigue;
}

export interface Superset {
  firstExercise: ExerciseInstance;
  secondExercise: ExerciseInstance;
  sets: string;
}