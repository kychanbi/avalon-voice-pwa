export function findVoicesByLang(lang: string): SpeechSynthesisVoice[] {
  const synth = window.speechSynthesis;
  const voices: SpeechSynthesisVoice[] = synth.getVoices();
  return voices
    .filter((v) => !v.voiceURI.includes('eloquence'))
    .filter((v) => v.lang.includes(lang.substring(0,2)));
}
export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function speak(text: string, rate = 1, voice?: SpeechSynthesisVoice) {
  if (!voice) {
    console.error('No available voice');
    return;
  }
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;
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
