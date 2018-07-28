import fs from 'fs';
import regex from 'regex';

describe('Parsing', () => {
  it('should parse the last TW Standup position', () => {
    const response = fs.readFileSync('./test/unit/dummy/Meeting_Minutes.txt', 'utf8');
    const title = regex.findLastTwStandUpTitle(response);
    expect(title).toBe('TW Standup (2018.05.11)');
  });
});