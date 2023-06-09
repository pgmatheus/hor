import translate from "translate";

export const translateText = async (
	text: string,
	dest_lang: string,
	source_lang = "en"
) => {
	try {
		const translation = await translate(text, {
			from: source_lang,
			to: dest_lang,
		}); // Translate from English to Spanish (you can change the language codes)
		return { text: translation, error: false };
	} catch (error) {
		return { text: text, error: true };
	}
};
