exports.prepareString = input => {
  let results = removeWhitespace(input);
  results = capitalizeInitial(results);
  return results;
};

const removeWhitespace = input => {
  let results = input.trim();
  results = results.replace(/\s+/g, " ");
  return results;
};

const capitalizeInitial = input => {
  let results = input.toLowerCase();
  results = results.split(" ");
  for (let i = 0; i < results.length; i++) {
    results[i] = results[i][0].toUpperCase() + results[i].slice(1);
  }
  results = results.join("_");
  return results;
};
