/**
 * required params: `lat`, `lon`, `appid`
 *
 * optional params: `units`, `mode`, `cnt`, `units`, `lang`
 *
 * https://openweathermap.org/forecast5
 */
export const forecastUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.openweathermap.org/data/2.5/forecast'
    : 'https://run.mocky.io/v3/1dfa6a0d-11f4-41ea-a23d-6ecf53249459';

/**
 * required params: `q`, `appid`
 *
 * optional params: `limit`
 *
 * https://openweathermap.org/api/geocoding-api
 */
export const geoUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.openweathermap.org/geo/1.0/direct'
    : 'https://run.mocky.io/v3/e4e8bcbb-df91-4c69-8def-b7e7682d0f01';

export const appid =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_KEY : 'key';
