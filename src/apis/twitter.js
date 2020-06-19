const TWITTER_GET_SINGLE_TWEET_BASE_URL =
  'https://fj9xc2nlr1.execute-api.ap-southeast-2.amazonaws.com/dev/tweets?id=';

export async function getTweetCreatedTime(id) {
  const requestUrl = TWITTER_GET_SINGLE_TWEET_BASE_URL + id;
  const response = await fetch(requestUrl);
  const data = await response.json();
  return JSON.parse(data.body).data;
}
