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
  results = results.join(" ");
  return results;
};

const prepareInput = input => {
  let results = removeWhitespace(input);

  console.log(results);
};

prepareInput("   THis    iS    A   teST   ");
