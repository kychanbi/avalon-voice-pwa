import { generateAvalonScript } from './MC';

describe('Script generation testing (2 evils game)', () => {
  it('(0 special evils) script generated correctly', () => {
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

  it('(Mordred present) script generated correctly', () => {
    const useLancelotAlternativeRules = false;
    const isLancelotPresent = false;
    const isMordredPresent = true;
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

  it('(Mordred & Oberon present) script generated correctly', () => {
    const useLancelotAlternativeRules = false;
    const isLancelotPresent = false;
    const isMordredPresent = true;
    const isMorganaPresent = false;
    const isOberonPresent = true;
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

  it('(Mordred & Oberon present) newbie on script generated correctly', () => {
    const useLancelotAlternativeRules = false;
    const isLancelotPresent = false;
    const isMordredPresent = true;
    const isMorganaPresent = false;
    const isOberonPresent = true;
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

describe('Script generation testing (3 evils game)', () => {
  it('(0 special evils) script generated correctly(newbie on)', () => {
    const useLancelotAlternativeRules = false;
    const isLancelotPresent = false;
    const isMordredPresent = false;
    const isMorganaPresent = false;
    const isOberonPresent = false;
    const isPercivalPresent = false;
    const isNewbieMode = true;
    const numberOfEvil = 3;
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
  it('(Mordred present) script generated correctly(newbie on)', () => {
    const useLancelotAlternativeRules = false;
    const isLancelotPresent = false;
    const isMordredPresent = false;
    const isMorganaPresent = false;
    const isOberonPresent = false;
    const isPercivalPresent = false;
    const isNewbieMode = true;
    const numberOfEvil = 3;
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
  it('(Mordred Morgana present) script generated correctly', () => {
    const useLancelotAlternativeRules = false;
    const isLancelotPresent = false;
    const isMordredPresent = true;
    const isMorganaPresent = true;
    const isOberonPresent = false;
    const isPercivalPresent = true;
    const isNewbieMode = false;
    const numberOfEvil = 3;
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
  it('(Mordred Morgana Oberon present) script generated correctly', () => {
    const useLancelotAlternativeRules = false;
    const isLancelotPresent = false;
    const isMordredPresent = true;
    const isMorganaPresent = true;
    const isOberonPresent = true;
    const isPercivalPresent = true;
    const isNewbieMode = false;
    const numberOfEvil = 3;
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
  it('(Mordred Morgana Lancelot present) script generated correctly', () => {
    const useLancelotAlternativeRules = false;
    const isLancelotPresent = true;
    const isMordredPresent = true;
    const isMorganaPresent = true;
    const isOberonPresent = false;
    const isPercivalPresent = true;
    const isNewbieMode = false;
    const numberOfEvil = 3;
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
