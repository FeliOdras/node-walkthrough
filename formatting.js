const removeWhitespace = input => {
  let results = input.trim();
  results = results.replace(/\s+/g, " ");
  console.log(results);
};

const capitalizeInitial = input => {
  let results = input.toLowerCase();
  console.log(results);
};
capitalizeInitial("this Is a senTence");
