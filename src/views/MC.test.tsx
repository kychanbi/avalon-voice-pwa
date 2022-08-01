import React from 'react';
import { render, screen } from '@testing-library/react';
import { generateAvalonScript } from './MC';

describe('Script generation testing', () => {
  it('5 ppl game (0 special evils) script generated correctly', () => {
    const useLancelotAlternativeRules = false,
      isLancelotPresent = false,
      isMordredPresent = false,
      isMorganaPresent = false,
      isOberonPresent = false,
      isPercivalPresent = false,
      isNewbieMode = false,
      numberOfEvil = 2;
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
    expect(scripts).toMatchSnapshot();
  });
});

