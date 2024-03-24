function constructNote(message, letters) {
  let lCounter = {};
  let l;
  for (let i = 0; i < letters.length; i++) {
    l = letters[i];
    // lCounter[l] = (lCounter[l] ?? 0) + 1; // Udemy doesnt support the nullish operator
    lCounter[l] = ++lCounter[l] || 1;
  }

  for (let i = 0; i < message.length; i++) {
    l = message[i];
    if (lCounter[l] > 0) {
      lCounter[l]--;
    } else {
      return false;
    }
  }
  return true;
}

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true
