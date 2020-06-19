import cityTimezones from 'city-timezones';

/**
 * return the id of the tweet from a tweet url
 * @param {string} url
 */
export function extractTweetId(url) {
  return url.split('/').pop();
}

/**
 * Format the datetime string
 * @param {string} datetimeString
 */
export function formatDateTime(datetimeString) {
  const strArr = datetimeString.split(' ');
  return `${strArr[5]} ${strArr[1]} ${strArr[2]} ${strArr[0]} ${strArr[3]}`;
}

/**
 * Find all matching result from the citytimezone list
 * @param {string} string
 */
export function findCityTimezone(string) {
  return cityTimezones.findFromCityStateProvince(string);
}
