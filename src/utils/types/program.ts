import { type } from "os";
import { WeekdayEnum } from "../enums/workout";
import {
  DayTypeEnum,
  ProgramStructureEnum,
  ProgramTypeEnum,
} from "../enums/program";
import { Workout } from "./workout";

export interface Program {
  documentId: string;
  name: string;
  description?: string;
  structure: ProgramStructureEnum;
  split?: Split;
  // workouts?: Array<Workout>;
  numberOfMicrocycles?: number;
  type: ProgramTypeEnum;
}

export interface Split {
  days: Array<Day>;
}

export interface Day {
  weekday?: WeekdayEnum;
  type: DayTypeEnum;
  workout?: Workout;
}
