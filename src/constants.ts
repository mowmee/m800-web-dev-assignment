/**
 * required params: `lat`, `lon`, `appid`
 *
 * optional params: `units`, `mode`, `cnt`, `units`, `lang`
 *
 * https://openweathermap.org/forecast5
 */
export const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

/**
 * required params: `q`, `appid`
 *
 * optional params: `limit`
 *
 * https://openweathermap.org/api/geocoding-api
 */
export const geoUrl = 'http://api.openweathermap.org/geo/1.0/direct';
