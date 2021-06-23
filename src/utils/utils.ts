import { Constants } from '../Constant';

export function findVoice(voiceName: string): (SpeechSynthesisVoice | undefined){
  const synth = window.speechSynthesis;
  const voices: SpeechSynthesisVoice[] = synth.getVoices();
  return voices.find((v) => v.lang === voiceName);
  // synth.voice
}
export async function sleep(ms: number){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function initVoice(){
  // setVoice(Constants.voice);
}

export function speak(text: string, rate = 1){
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = findVoice(Constants.voice) as SpeechSynthesisVoice;
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
