const OAuth = require('oauth');
const dotenvConfig = require('dotenv').config();

const fixedEncodeURIComponent = ((str) => {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
});

var search = ((req,res) => {
  let query = fixedEncodeURIComponent(req.body.search);
  var oauth = new OAuth.OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    //'mKW9MoTq8Ua4YUkPbE1MNy0TA',
    process.env.consumer_key,
    //'DZ8bzWvEjez59WXmoHThBHyKRnh7P8jsU8bMzoOtVah2UMo320',
    process.env.consumer_secret,
    '1.0A',
    null,
    'HMAC-SHA1'
  );

  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${query}`,
    //'838648019637579776-SUvs5EaiCLjTFBinDWFHHSFp06d4GhJ', //test user token
    process.env.access_token, //test user token
    //'VOUkP9Sc2rzcRAOJIfX9V9eytKH1PEpAmdUc0jXOuCnR9', //test user secret
    process.env.access_token_secret, //test user secret
    (err, data) => {
      res.send(err ? err : data);
    });


});

module.exports = {
  search
};
