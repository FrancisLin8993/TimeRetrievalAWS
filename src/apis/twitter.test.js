import nock from 'nock';

it('get tweet correctly', () => {
  const tweetId = `1257501619568009216`;
  const scope = nock(
    'https://fj9xc2nlr1.execute-api.ap-southeast-2.amazonaws.com'
  )
    .get(`/dev/tweets?id=${tweetId}`)
    .reply(200, '{"data":"Mon May 04 02:51:05 +0000 2020"}');
  expect(scope.isDone());
});
