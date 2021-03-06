/* istanbul ignore file */

import axios from "axios";
axios.defaults.params = {};
axios.defaults.params["appid"] = "395bdb55ebbc842e8c1a95e3050f19c6";

const api = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5"
});

export default api;
