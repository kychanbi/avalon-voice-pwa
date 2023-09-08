export function getDevicePlatform(): string {
  return navigator?.userAgentData?.platform || navigator?.platform || 'unknown';
}

export function checkIfIos(): boolean {
  return /iPad|iPhone|iPod/.test(getDevicePlatform());
}
