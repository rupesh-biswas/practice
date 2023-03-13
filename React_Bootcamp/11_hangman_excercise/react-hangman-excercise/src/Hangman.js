import React, { useEffect, useState } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from "./words";


function Hangman(props) {
    const [nWrong, setnWrong] = useState(0);
    const [guessed, setGuessed] = useState(new Array());
    const [answer, setAnswer] = useState(randomWord());
    // console.log(answer)

    /** guessedWord: show current-state of word:
      if guessed letters are {a,p,e}, show "app_e" for "apple"
    */
    function guessedWord() {
        return answer
            .split("")
            .map(ltr => (guessed.includes(ltr) ? ltr : "_"));
    }

    /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
    function handleGuess(evt) {
        let ltr = evt.target.value;
        setGuessed([...guessed, ltr]);
        setnWrong(nWrong + (answer.includes(ltr) ? 0 : 1));
    }

    // useEffect(() => {
    //     console.log(guessed, nWrong);
    // }, [guessed, nWrong]);

    /** generateButtons: return array of letter buttons to render */
    function generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={handleGuess}
                disabled={guessed.includes(ltr)}
            >
                {ltr}
            </button>
        ));
    }


    function restartGame() {
        setAnswer(randomWord());
        setGuessed(new Array());
        setnWrong(0);
    }

    /** render: render game */
    const gameOver = nWrong >= props.maxWrong;
    const isWinner = guessedWord().join("") === answer;
    let gameState = generateButtons();
    if (gameOver) gameState = "You Lose";
    if (isWinner) gameState = "You Win!!! 🥳🥳🎉🎉"
    return (
        <div className='Hangman'>
            <h1>Hangman</h1>
            <img src={props.images[nWrong]} alt={`${nWrong} wrong guesses`} />
            <p>Number of wrong guess: {nWrong} out of {props.maxWrong}</p>
            <p className='Hangman-word'>
                {!gameOver ? guessedWord() : answer}</p>
            <p className='Hangman-btns'>{gameState}</p>
            <button id="reset" onClick={restartGame}>RESTART</button>
        </div>
    );

}

Hangman.defaultProps = {
    /** by default, allow 6 guesses and use provided gallows images. */
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
}

export default Hangman;