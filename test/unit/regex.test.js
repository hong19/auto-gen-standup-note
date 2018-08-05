import fs from 'fs';
import regex from 'regex';

describe('Parsing', () => {
  it('should parse the last TW Standup position', () => {
    // arrange
    const content = fs.readFileSync('./test/unit/dummy/Meeting_Minutes.txt', 'utf8');

    // act
    const title = regex.findLastTwStandUpTitle(content);

    // assert
    expect(title).toEqual({
      title: 'TW Standup (2018.05.11)',
      index: 354
    });
  });
});


describe('Clean Done section', () => {
  it('should clean all Done section', () => {
    // arrange
    const content = fs.readFileSync('./test/unit/dummy/TW_Standup_(2018.07.27).txt', 'utf8');

    // act
    const cleanedContent = regex.cleanDoneSection(content);

    // assert
    const expectedCleanedContent = fs.readFileSync('./test/unit/dummy/TW_Standup_(2018.07.27)_cleaned.txt', 'utf8');
    expect(cleanedContent).toBe(expectedCleanedContent);
  });
});