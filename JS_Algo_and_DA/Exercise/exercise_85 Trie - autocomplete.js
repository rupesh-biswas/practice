class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      var char = word[index];
      var subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }

  findWord(word, index = 0) {
    var char = word[index];
    if (index < word.length - 1 && this.characters[char]) {
      return this.characters[char].findWord(word, index + 1);
    } else {
      return this.characters[char];
    }
  }
  getWords(words = [], currentWord = "") {
    if (this.isWord) {
      words.push(currentWord);
    }
    for (var char in this.characters) {
      var nextWord = currentWord + char;
      this.characters[char].getWords(words, nextWord);
    }
    return words;
  }
  autoComplete(prefix) {
    let subTrie = this.findWord(prefix);
    if (!subTrie) {
      return [];
    }
    return subTrie.getWords([], prefix);
  }
}

var t = new Trie();
t.addWord("fun");
t.addWord("fast");
t.addWord("fat");
t.addWord("fate");
t.addWord("father");
t.addWord("forget");
t.addWord("awesome");
t.addWord("argue");

t.autoComplete("fa"); // ["fast","fat", "fate", "father"]
t.autoComplete("a"); // ["awesome", "argue"]
t.autoComplete("arz"); // []
