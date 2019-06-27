const axios = require("axios");
const { prepareString } = require("../formatting");

exports.getTimeData = async (area, city) => {
  if ((area, city)) {
    area = prepareString(area);
    city = prepareString(city);
  }
  try {
    const response = await axios(
      `http://worldtimeapi.org/api/timezone/${
        area && city ? area + "/" + city : ""
      }`
    );
    return response.data;
  } catch (err) {
    console.log(
      `Something went wrong. \n Use --help for more information. \n ${err}`
    );
  }
};
