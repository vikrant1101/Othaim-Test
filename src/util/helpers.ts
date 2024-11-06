export function useTriangleClass(changeValue: string | number) {
  const change =
    typeof changeValue === 'number' ? changeValue : parseFloat(changeValue);

  if (isNaN(change)) {
    console.warn('Invalid change value:', changeValue);
    return {isNegative: false };
  }


  const isNegative = change < 0; 

  return { isNegative };
}
export function getDeviceType() {
  const userAgent = navigator.userAgent;
  if (/windows/i.test(userAgent)) {
    return 'Windows';
  } else if (/android/i.test(userAgent)) {
    return 'Android';
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    return 'iOS';
  } else if (/Macintosh/i.test(userAgent)) {
    return 'Mac';
  } else if (/Linux/i.test(userAgent)) {
    return 'Linux';
  } else {
    return 'Other';
  }
}
