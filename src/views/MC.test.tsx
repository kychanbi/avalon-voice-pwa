import { generateAvalonScript } from './MC';

describe('Script generation testing', () => {
  it('5 ppl game (0 special evils) script generated correctly', () => {
    const useLancelotAlternativeRules = false;
    const isLancelotPresent = false;
    const isMordredPresent = false;
    const isMorganaPresent = false;
    const isOberonPresent = false;
    const isPercivalPresent = false;
    const isNewbieMode = false;
    const numberOfEvil = 2;
    const scripts = JSON.stringify(generateAvalonScript({
      useLancelotAlternativeRules,
      isLancelotPresent,
      isMordredPresent,
      isMorganaPresent,
      isOberonPresent,
      isPercivalPresent,
      isNewbieMode,
      numberOfEvil,
    }));
    expect(scripts)
      .toMatchSnapshot();
  });
});
