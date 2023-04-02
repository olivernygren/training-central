export enum ProgressionTypeEnum {
  NONE = 'none',
  REGULATED = 'regulated'
}

export enum Weekday {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

export enum EquipmentEnum {
  BODYWEIGHT = 'Bodyweight',
  WEIGHTED = 'Weighted',
  CABLE = 'Cable',
  CABLE_ROPE = 'Cable rope',
  CABLE_CUFFED = 'Cable with cuffs',
  CABLE_BAR = 'Cable with bar',
  BARBELL = 'Barbell',
  MACHINE_PIN_LOADED = 'Pin-loaded machine',
  MACHINE_PLATE_LOADED = 'Plate-loaded machine',
  CABLE_MACHINE = 'Cable machine',
  DUMBBELL = 'Dumbbell',
  TIGHT_CABLE = 'Tight cable',
  PLATE = 'Plate',
  EZ_BAR = 'EZ-Bar',
  PRIME_MACHINE = 'Prime machine'
}

export enum LoadingRangeEnum {
  SHORTENED = 'Shortened',
  LENGTHENED = 'Lengthened',
  MID = 'Mid range'
}

export enum SetType {
  STRAIGHT_SET = 'Straight set',
  SUPERSET = 'Superset',
  DROP_SET = 'Drop set',
  GIANT_SET = 'Giant set',
  MYOREPS = 'Myoreps',
}

export enum SetIntensityType {
  WORKING_SET = 'Working set',
  WARM_UP_SET = 'Warm-up set',
  BACK_OFF_SET = 'Back-off set',
}

export enum WeightUnitEnum {
  KG = 'kg',
  LBS = 'lbs'
}

export enum MuscleGroupEnum {
  CHEST = 'Chest',
  BACK = 'Back',
  UPPER_BACK = 'Upper back',
  LATS = 'Lats',
  TRAPS = 'Traps',
  LOWER_BACK = 'Lower back',
  ERECTORS = 'Erectors',
  SHOULDERS = 'Shoulders',
  FRONT_DELTS = 'Front delts',
  MID_DELTS = 'Mid delts',
  REAR_DELTS = 'Rear delts',
  BICEPS = 'Biceps',
  TRICEPS = 'Triceps',
  FOREARMS = 'Forearms',
  LEGS = 'Legs',
  QUADS = 'Quads',
  HAMSTRINGS = 'Hamstrings',
  GLUTES = 'Glutes',
  ADDUCTORS = 'Adductors',
  CALVES = 'Calves',
  ABS = 'Abs'
}

export enum DesiredProgressGoal {
  MAINTENANCE = 'Maintenance',
  GROWTH = 'Growth'
}

export enum ProgramScheduleType {
  FLOATING = 'Floating',
  WEEKLY = 'Weekly'
}

export enum WorkoutPerformanceEvaluationOptions {
  TWO_REPS_OR_MORE_FROM_DESIRED_RIR = "You hit your target reps 2 RIR or more above what was planned for that week OR you had to do 2 or more extra reps to match planned RIR.",
  ONE_REP_FROM_DESIED_RIR = "You hit your target reps at the RIR planned or 1 above it OR you had to do no extra reps or one more rep to match planned RIR.",
  HIT_TARGET_REPS_AT_LOWER_RIR = "You hit your target reps at a lower RIR than expected",
  COULD_NOT_MATCH_LAST_WEEK = "You couldn't match your last week's reps no matter the RIR",
}

export enum WorkoutSorenessEvaluationOptions {
  NO_SORENESS = "You didn't get sore at all.",
  LITTLE_SORENESS_HEALED_WAY_IN_ADVANCE = "You got stiff for a few hours after or a bit sore the next day, but healed well in advance of your next session for that muscle group.",
  GOT_DOMS_HEALED_JUST_IN_TIME = "You got DOMS, but healed completely just in time for your next session for that muscle group.",
  GOT_OVERLAPPING_DOMS = "You got DOMS, and you still had it in any way, shape, or form, when training that muscle group in its next session."
}

export enum ExerciseTagEnum {
  SLOW_NEGATIVES = 'Slow negatives',
  DEEP_STRETCH = 'Deep stretch',
  PAUSE_REPS = 'Pause reps',
  REST_PAUSE = 'Rest pause',
  WIDE_GRIP = 'Wide grip',
  NARROW_GRIP = 'Narrow grip',
  MEDIUM_GRIP = 'Medium grip',
  WIDE_STANCE = 'Wide stance',
  NARROW_STANCE = 'Narrow stance'
}