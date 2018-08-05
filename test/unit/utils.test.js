import utils from 'utils';
import moment from 'moment';

describe('Generate today title', () => {
  it("should generate today's standup title", () => {
    // arrange
    moment.prototype.format = jest.fn(() => '2018.05.11');

    // act
    const title = utils.generateTodayTitle();

    // assert
    expect(title).toBe('TW Standup (2018.05.11)');
  });
});