const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
const createError = require('./utils').createError;

const apikey = process.env.NATURAL_LANGUAGE_UNDERSTANDING_APIKEY;
let client;
try {
  client = new NaturalLanguageUnderstandingV1({
    authenticator: new IamAuthenticator({ apikey }),
    version: '2020-01-01',
    url: process.env.NATURAL_LANGUAGE_UNDERSTANDING_URL,
  });
} catch (err) {
  console.error('Error creating service client: ', err);
}

const analyze = async params => {
  try {
    const { result } = await client.analyze(params);
    return result;
  } catch (err) {
    let error;
    let statusCode;
    if (!client && !apikey) {
      error = createError(
        'Invalid credentials',
        'Could not find valid credentials for the Natural Language Understanding service.',
      );
      statusCode = 401;
    } else {
      console.error(err);
      error = createError(
        'Authentication error',
        'There was a problem authenticating with the Natural Language Understanding service.',
      );
      statusCode = 400;
    }
    throw {
      ...error,
      statusCode,
    };
  }
};

module.exports = {
  analyze,
};
