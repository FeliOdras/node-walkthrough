const removeWhitespace = input => {
  let results = input.trim();
  results = results.replace(/\s+/g, " ");
  console.log(results);
};

const capitalizeInitial = input => {
  let results = input.toLowerCase();
  results = results.split(" ");
  console.log(results);
};
capitalizeInitial("This Is a senTencE");
