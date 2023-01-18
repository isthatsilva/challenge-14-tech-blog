const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2023-01-18 16:13:03');
    expect(format_date(date)).toBe('1/18/2023');
});