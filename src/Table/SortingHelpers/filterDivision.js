import data from "../data";
import { filters as filterConstants } from "../constants";
import { greedyPartitioning } from "./greedyPartitioning";

const normalize = (val, max, min) => (val - min) / (max - min);

const traits = ["IS", "IN", "EN", "ES"];
const sex = ["Male", "Female"];

const filterDivision = (filters) => {
  const percantageSplit = [50, 30, 20];

  let filterPriority = {};
  Object.keys(filters).map((d, index) => {
    filterPriority[filters[d].id] = filters[d].isActive
      ? percantageSplit[index]
      : 0;
  });

  const normalized = data.map((person) => {
    const normalizedTrait =
      normalize(traits.indexOf(person.personality), 0, 4) *
      filterPriority[filterConstants.TRAITS_ID];
    const normalizedSex =
      normalize(sex.indexOf(person.gender), 0, 2) *
      filterPriority[filterConstants.SEX_ID];
    const normalizedExperience =
      normalize(person.experience, 0, 3) *
      filterPriority[filterConstants.EXPERIENCE_ID];

    const coeficient =
      normalizedTrait * 5 + normalizedSex + normalizedExperience;

    return { coeficient, ...person };
  });

  const output = greedyPartitioning(normalized, 3);

  return output;
};

export { filterDivision };
