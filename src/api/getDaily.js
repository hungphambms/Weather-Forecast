import api from "./index";

/**
 * Fetch city information from openweathermap via rest request
 * 1. Fetch city data
 * 2. Return
 *
 * @param {*} query
 * @returns
 */
const getDaily = async function (coordLat, coordLong) {
  return await api.get(
    `/onecall?lat=${coordLat}&lon=${coordLong}&exclude=minutely,hourly,alerts`
  );
};

export default getDaily;
