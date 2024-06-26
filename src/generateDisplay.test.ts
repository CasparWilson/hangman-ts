import { generateDisplay } from "./generateDisplay";

test("test when no guessed letters", () => {
    const guessedLetters = []
    const answer = 'mandarin'
    const expected = ["_", "_", "_", "_", "_", "_", "_", "_"]
    expect(generateDisplay(guessedLetters, answer)).toBe(expected);
});

test("test Neill's example case", () => {
    const guessedLetters = ["u", "e", "a", "m", "d", "y"]
    const answer = 'mandarin'
    const expected = ["m", "a", "_", "d", "a", "_", "_", "_"]
    expect(generateDisplay(guessedLetters, answer)).toBe(expected);
});

//should return: 
//