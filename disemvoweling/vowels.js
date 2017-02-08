function removeVowels(str) {
	vowels=/[aeiou]/gi;
	replaced=""
		return str.replace(vowels,replaced);
}
const userInput = prompt("Please enter some text!");
const withoutVowels = removeVowels(userInput);
document.write(withoutVowels)
