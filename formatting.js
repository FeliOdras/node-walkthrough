const removeWhitespace = input => {
  let results = input.trim();
  results = results.replace(/\s+/g, " ");
  console.log(results);
};
