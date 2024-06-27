import { generateDisplay } from "./generateDisplay";

test("test when no guessed letters", () => {
    const guessedLetters: string[] = []
    const answer = 'mandarin'
    const expected = ["_", "_", "_", "_", "_", "_", "_", "_"]
    expect(generateDisplay(guessedLetters, answer)).toBe(expected);
});

test("test when no guessed letters correct", () => {
    const guessedLetters = ['b', 'c', 'e']
    const answer = 'mandarin'
    const expected = ["_", "_", "_", "_", "_", "_", "_", "_"]
    expect(generateDisplay(guessedLetters, answer)).toBe(expected);
});

test("test display space without guessing", () => {
    const guessedLetters = ['b', 'c', 'e']
    const answer = 'a space'
    const expected = ["_", " ", "_", "_", "_", "_", "e"]
    expect(generateDisplay(guessedLetters, answer)).toBe(expected);
});

test("test when double letter guessed", () => {
    const guessedLetters = ['p']
    const answer = 'apple'
    const expected = ["_", "p", "p", "_", "_"]
    expect(generateDisplay(guessedLetters, answer)).toBe(expected);
});

test("test Neill's example case", () => {
    const guessedLetters = ["u", "e", "a", "m", "d", "y"]
    const answer = 'mandarin'
    const expected = ["m", "a", "_", "d", "a", "_", "_", "_"]
    expect(generateDisplay(guessedLetters, answer)).toBe(expected);
});