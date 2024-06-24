export const findLcp = (strs) => {
  if (!strs || !Array.isArray(strs)) {
    return strs || '';
  }
  if (strs.length <= 1) {
    return strs.join('');
  }
  const checkStrs = strs.slice(0, -1);
  let lcp = [];
  for (let wIndex = 0; wIndex < checkStrs.length; wIndex++) {
    const word = checkStrs[wIndex];
    const chars = lcp.length === 0 ? word.split('') : lcp;
    const _lcp = [];
    for (let cIndex = 0; cIndex < chars.length; cIndex++) {
      const char = chars[cIndex];
      const charNextWord = strs[wIndex + 1].at(cIndex);
      if (charNextWord && charNextWord === char) {
        _lcp.push(char);
      } else {
        break;
      }
    }
    lcp = _lcp;
    if (_lcp.length === 0) {
      break;
    }
  };

  return lcp.join('');
};
