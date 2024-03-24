class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }
  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      let char = word[index];
      let subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }
}

// var firstTrie = new Trie();
// firstTrie.addWord("fun")
// firstTrie.characters // {f: Trie}
// !!firstTrie.characters["f"] // true

// firstTrie.characters.f.characters.u // {u: Trie}
// !!firstTrie.characters.f.characters.u // true

// firstTrie.characters.f.characters.u.characters.n.isWord // true
// !!firstTrie.characters.f.characters.u.characters.n // true
// firstTrie.characters.f.characters.u.characters.n.characters // {}

// !!firstTrie.characters.f.characters.u.characters.l // false

// firstTrie.addWord("funny");

var secondTrie = new Trie();
secondTrie.addWord("ha");
secondTrie.addWord("hat");
secondTrie.addWord("has");
secondTrie.addWord("have");
secondTrie.addWord("hate");

secondTrie.characters.h.characters.a.isWord; // true
secondTrie.characters.h.characters.a.characters.t.isWord; // true
secondTrie.characters.h.characters.a.characters.v.isWord; // false
secondTrie.characters.h.characters.a.characters.v.characters.e.isWord; // true
secondTrie.characters.h.characters.a.characters.t.characters.e.isWord; // true

Object.keys(secondTrie.characters.h.characters.a.characters).length; // 3
