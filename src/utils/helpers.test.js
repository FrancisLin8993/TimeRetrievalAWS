import { findCityTimezone } from './helpers';

it('can find citytimezone object by string', () => {
  const result = findCityTimezone('Sydney New South Wales');
  expect(result[0].city).toEqual('Sydney');
  expect(result[0].country).toEqual('Australia');
});
