

const Adagrams = {
  letterArray: ["A", "A", "A", "A", "A", "A", "A", "A", "A",
    "B", "B", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E", "E",
    "E", "E", "E", "E", "E", "E", "E", "F", "F", "G", "G", "G", "H",
    "H", "I", "I", "I", "I", "I", "I", "I", "I", "I", "J", "K", "L",
    "L", "L", "L", "M", "M", "N", "N", "N", "N", "N", "N", "O", "O",
    "O", "O", "O", "O", "O", "O", "P", "P", "Q", "R", "R", "R", "R",
    "R", "R", "S", "S", "S", "S", "T", "T", "T", "T", "T", "T", "U", 
    "U", "U", "U", "V", "V", "W", "W", "X", "Y", "Y", "Z"],

  drawLetters() {
    let lettersCopy = [...this.letterArray];
    let hand = [];
    for (let i = 0; i < 10; i += 1) {
      let randIndex = Math.floor(Math.random()*lettersCopy.length);
      hand.push(lettersCopy[randIndex]);
      lettersCopy.splice(randIndex, 1);
    }
    return hand;
  },

  usesAvailableLetters(input, lettersInHand) {
    if (input.length > lettersInHand.length) return false;
    let handObject = {};
    lettersInHand.forEach(letter => {
      handObject[letter] ? handObject[letter] += 1 : handObject[letter] = 1 ;
    });
    for (let i = 0; i < input.length; i += 1) {
      if (!handObject[input[i]] || handObject[input[i]] <= 0) return false;
      handObject[input[i]] -= 1;
    }
    return true;
  },

  scoreWord(word) {
    let alphaScores = {A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2,
      H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10,
      R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10};
    let score = 0;
    for (let i = 0; i < word.length; i += 1) score += alphaScores[word[i].toUpperCase()];
    if (word.length >= 7) score += 8;
    return score;
  },

  highestScoreFrom(words) {
    let bestWord = '';
    let bestScore = 0;
    for (let i = 0; i < words.length; i += 1) {
      let word = words[i];
      let score = Adagrams.scoreWord(word);
      if (score > bestScore) {
        bestWord = word;
        bestScore = score;
      } else if (score == bestScore) {
          if (bestWord.length != 10 && (word.length == 10 || word.length < bestWord.length)) {
            bestWord = word;
            bestScore = score;
          }
      }
    }
    const bestWordObj = { word: bestWord, score: bestScore };
    return bestWordObj;
  },
};


// Do not remove this line or your tests will break!
export default Adagrams;


