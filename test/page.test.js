/* eslint-disable no-undef */
jest.setTimeout(10000);

describe('app', () => {
  let server;

  beforeAll(() => {
    server = require('../server');
  });

  afterAll(done => {
    server.close(() => {
      console.log('shutting down server');
      done();
    });
  });

  beforeEach(async () => {
    await page.goto('http://localhost:5000');
  });

  it('should display the NLU logo', async () => {
    await expect(page).toMatch('Natural Language Understanding');
  });

  it('should match a button with an "Analyze" text inside', async () => {
    await expect(page).toMatchElement('.bx--btn--primary', {
      text: 'Analyze',
    });
  });

  it('should match a input with a "textInput" name then fill it with text', async () => {
    await expect(page).toMatchElement('#custom-input');
  });
});
