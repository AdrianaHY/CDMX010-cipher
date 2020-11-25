const cipher = {
  encode: (offset, text) => {
    let newWord = [];
    let newOffset = parseInt(offset);
    let letter;
    for (let i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
        letter = String.fromCharCode((text.charCodeAt(i) - 65 + newOffset) %26 + 65);
        newWord.push(letter)
      } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
        letter = String.fromCharCode((text.charCodeAt(i) - 97 + newOffset) % 26 + 97);
        newWord.push(letter)
      }
    }
    return newWord.join('');
  },
  decode: (offset, text) => {
    return cipher.encode(26 - (offset % 26), text);
  }
};

export default cipher;