const axios = require("axios");
const { prepareString } = require("../formatting");

exports.getTimeData = async (area, city) => {
  area = prepareString(area);
  city = prepareString(city);
  const response = await axios(
    `http://worldtimeapi.org/api/timezone/${
      area && city ? area + "/" + city : ""
    }`
  );

  return response.data;
};
