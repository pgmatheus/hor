import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import { translateText } from "./transl";
import { zodiacSigns } from "../database/database";

export const first_run = async () => {
	const settingsString = await AsyncStorage.getItem("settings"); // verify if exists previous settings
	if (settingsString === null) {
		try {
			const systemLanguage = Localization.locale;
			const subs_lang = systemLanguage.substring(0, 2).toLocaleLowerCase();
			const verifylang = await translateText("initial", subs_lang);
			if (verifylang.error) {
				throw new Error("language not suported");
			}
			let transl_sign: { [key: number]: string } = {};
			for (let key in zodiacSigns) {
				const signTransl = await translateText(zodiacSigns[key], subs_lang);
				if (signTransl.error) {
					throw new Error("error getting signs");
				} else {
					transl_sign[key] = signTransl.text;
				}
			}

			const settings = {
				language: subs_lang,
				zodiacSigns: transl_sign,
			};
			await AsyncStorage.setItem("settings", JSON.stringify(settings));
		} catch (e) {
			const settings = {
				language: "en",
				zodiacSigns: zodiacSigns,
			};
			await AsyncStorage.setItem("settings", JSON.stringify(settings));
		}
	}
};
