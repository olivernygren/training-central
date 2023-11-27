import { MuscleGroupEnum } from "../enums/muscle-group";

export const getLowerBodyMuscleGroups = () => {
  return [
    MuscleGroupEnum.QUADS,
    MuscleGroupEnum.HAMSTRINGS,
    MuscleGroupEnum.CALVES,
    MuscleGroupEnum.GLUTES,
    MuscleGroupEnum.ADDUCTORS,
  ];
};

export const getUpperBodyMuscleGroups = () => {
  return [
    MuscleGroupEnum.CHEST,
    MuscleGroupEnum.BACK,
    MuscleGroupEnum.SHOULDERS,
    MuscleGroupEnum.BICEPS,
    MuscleGroupEnum.TRICEPS,
    MuscleGroupEnum.FOREARMS,
    MuscleGroupEnum.UPPER_TRAPS,
    MuscleGroupEnum.ABS,
  ];
};
