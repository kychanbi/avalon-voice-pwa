import { Constants } from '../Constant';

export function findVoiceByLang(
  langs: string[],
): SpeechSynthesisVoice | undefined {
  const synth = window.speechSynthesis;
  const voices: SpeechSynthesisVoice[] = synth.getVoices();
  const foundVoiceArr = voices
    .filter((v) => !v.voiceURI.includes('eloquence'))
    .filter((v) => langs.includes(v.lang));
  console.log('foundVoiceArr', foundVoiceArr);
  const [found] = foundVoiceArr;
  return found;
}
export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function speak(
  text: string,
  rate = 1,
  lang: string = Constants.langs[0],
) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = findVoiceByLang([
    lang,
    ...Constants.langs,
  ]) as SpeechSynthesisVoice;
  utterance.lang = utterance.voice?.lang;
  utterance.rate = rate;
  synth.speak(utterance);
}

export async function pauseSpeaking(s: number) {
  const synth = window.speechSynthesis;
  synth.pause();
  await sleep(s * 1000);
  synth.resume();
}

export function endSpeaking() {
  const synth = window.speechSynthesis;
  synth.cancel();
}
