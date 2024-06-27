function generateDisplay(
    guessedLetters:string[], 
    wordToGuess:string
): string[] {
    const wordArrayWithCorrectGuesses = wordToGuess.split('').map(() => '_')

    return wordArrayWithCorrectGuesses

guessedLetters.push(wordToGuess)
return guessedLetters
}

export {generateDisplay}