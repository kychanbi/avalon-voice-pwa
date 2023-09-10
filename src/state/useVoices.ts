import { useEffect, useState } from 'react';
import { findVoicesByLang } from '../utils/speakingUtils';
import { Language } from './playerSetting';
import { checkIfIos } from '../utils/utils';

export const useVoices = (lang: Language) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice>();
  const loadVoices = () => {
    const foundVoiceList = findVoicesByLang(lang);
    setVoices(foundVoiceList);
    setSelectedVoice(foundVoiceList[0]);
  };
  useEffect(() => {
    if (checkIfIos()) {
      loadVoices();
    } else {
      //onvoiceschanged will trigger when the voices are acutally loaded
      window.speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
    }
  }, [lang]);

  return {
    voices,
    selectedVoice,
    setSelectedVoice,
    areVoicesLoaded: voices.length > 0,
  };
};
