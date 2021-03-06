import api from "./index";

/**
 * Fetch city information from openweathermap via rest request
 * 1. Fetch city data
 * 2. Return
 *
 * @param {*} query
 * @returns
 */
const getCity = async function (query) {
  return await api.get(`/weather?q=${query}`);
};

export default getCity;
