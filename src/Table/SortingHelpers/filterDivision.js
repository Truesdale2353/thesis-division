import { filters as filterConstants } from "../constants";
import { greedyPartitioning } from "./greedyPartitioning";

const normalize = (val, max, min) => (val - min) / (max - min);

const traits = ["IS", "IN", "EN", "ES"];
const sex = ["Male", "Female"];

const filterDivision = ({ filters, data, groupVolume }) => {
  const percantageSplit = [50, 30, 20];

  let filterPriority = {};
  Object.keys(filters).map((d, index) => {
    filterPriority[filters[d].id] = filters[d].isActive
      ? percantageSplit[index]
      : 0;
  });
  const average =
    data.reduce((total, next) => total + next.experience, 0) / data.length;

  const normalized = data.map((person) => {
    const normalizedTrait =
      normalize(traits.indexOf(person.personality.slice(2)), 0, 4) *
      filterPriority[filterConstants.TRAITS_ID];

    const normalizedSex =
      normalize(sex.indexOf(person.gender), 0, 2) *
      filterPriority[filterConstants.SEX_ID];

    const normalizedExperience = (person.experience * filterPriority[filterConstants.EXPERIENCE_ID]) /average;

    const coeficient = normalizedTrait + normalizedSex + normalizedExperience;

    return { coeficient, ...person };
  });

  const output = greedyPartitioning(normalized, groupVolume);

  return output;
};

export { filterDivision };
