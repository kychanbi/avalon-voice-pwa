import { Constants } from '../Constant';

export function findVoiceByLang(langs: string[]): (SpeechSynthesisVoice | undefined){
  const synth = window.speechSynthesis;
  const voices: SpeechSynthesisVoice[] = synth.getVoices();
  const foundVoiceArr = voices.filter((v) => langs.includes(v.lang));
  const [found] = foundVoiceArr;
  console.debug(voices);
  console.debug(langs);
  console.debug(found);
  return found;
  // synth.voice
}
export async function sleep(ms: number){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// export function initVoice(){
// setVoice(Constants.voice);
// }


export function speak(text: string, rate = 1){
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = findVoiceByLang(Constants.langs) as SpeechSynthesisVoice;
  utterance.lang = utterance.voice?.lang;
  utterance.rate = rate;
  // synth.cancel();
  synth.speak(utterance);
  console.log(text);
  // console.log(scriptArr);
  console.log(utterance);
  // synth.resume();
  // synth.cancel();
}

export async function pauseSpeaking(s: number){
  const synth = window.speechSynthesis;
  synth.pause();
  await sleep(s * 1000);
  synth.resume();
}

export function endSpeaking(){
  const synth = window.speechSynthesis;
  synth.cancel();
}
