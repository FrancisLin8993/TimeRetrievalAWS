import { findCityTimezone, validateLink } from './helpers';

it('can find citytimezone object by string', () => {
  const result = findCityTimezone('Sydney New South Wales');
  expect(result[0].city).toEqual('Sydney');
  expect(result[0].country).toEqual('Australia');
});

it('returns true when a twitter link is valid', () => {
  const link = 'https://twitter.com/jasonbenetti/status/1295195354292465664';
  const result = validateLink(link);
  expect(result).toBeTruthy();
});

it('returns false when a twitter link is invalid', () => {
  const link = 'https://twitter.com/jasonbenetti/statu';
  const result = validateLink(link);
  expect(result).toBeFalsy();
});
