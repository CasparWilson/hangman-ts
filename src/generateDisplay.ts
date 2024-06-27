function generateDisplay(
    guessedLetters:string[], 
    wordToGuess:string
): string[] {
    const wordWithCorrectGuesses = wordToGuess.split('').map(() => '_')


guessedLetters.push(wordToGuess)
return guessedLetters
}

export {generateDisplay}