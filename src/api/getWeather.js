/* istanbul ignore file */

import _ from "lodash";
import getCity from "./getCity";
import getDaily from "./getDaily";

/**
 * Fetch weather forecast from openweathermap via rest request
 * 1. Fetch city data
 * 2. Convert Coords from city
 * 3. Fetch daily forecast
 * 4. Return
 *
 * @param {*} query
 * @returns
 */
const getWeather = async function (query) {
  // 1. Fetch city data
  const respCity = await getCity(query);
  const cityData = respCity.data;

  // 2. Convert Coords from city
  const coordLat = _.get(cityData, "coord.lat");
  const coordLong = _.get(cityData, "coord.lon");

  // 3. Fetch daily forecast
  const respDaily = await getDaily(coordLat, coordLong);
  const dailyData = respDaily.data;

  // 4. Return
  return {
    ...dailyData,
    name: cityData.name,
    id: cityData.id,
  };
};



export default getWeather;
