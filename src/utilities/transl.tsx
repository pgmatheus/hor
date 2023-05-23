import { Translate } from "translate";

// Create a new instance of the Translate class
const translator = new Translate();

// Set the source and target languages
translator.from("en").to("fr");

// Function to translate text
async function transl(text: string): Promise<string> {
	try {
		const translatedText = await translator.translate(text);
		return translatedText;
	} catch (error) {
		console.error("Translation error:", error);
		return text; // Return the original text if translation fails
	}
}
