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
    let char = word[index];
    let subTrie = this.characters[char];

    if (index === word.length - 1) {
      // console.log(index, char, subTrie, subTrie.isWord )
      return subTrie.isWord ? subTrie : undefined;
    } else if (!subTrie) {
      return undefined;
    } else {
      return subTrie.findWord(word, index + 1);
    }
  }
}

var t = new Trie();
t.addWord("fun");
t.addWord("fast");
t.addWord("fat");
t.addWord("fate");
t.addWord("father");

// t.findWord('taco') // undefined
// t.findWord('fat').characters // {t: Trie}
// t.findWord('father').characters // {}
// t.findWord('father').isWord // true
