const greedyPartitioning = (array, numberOfSubsets) => {
  const sorted = array.sort((a, b) => b.coeficient - a.coeficient); // sort descending

  const out = [...Array(numberOfSubsets)].map((x) => {
    return {
      sum: 0,
      elements: [],
    };
  });

  for (const elem of sorted) {
    const chosenSubset = out.sort((a, b) => a.sum - b.sum)[0];
    chosenSubset.elements.push(elem);
    chosenSubset.sum += elem.coeficient;
  }

  return out.map((subset) => subset.elements);
};

export { greedyPartitioning };
