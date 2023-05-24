import AsyncStorage from "@react-native-async-storage/async-storage";

export const retrieveSettings = async () => {
	try {
		const settingsString = await AsyncStorage.getItem("settings");
		if (settingsString !== null) {
			const savedSettings = JSON.parse(settingsString);
			console.log("Retrieved settings:", savedSettings);
			// Do something with the settings
			return { result: savedSettings, error: false };
		}
		return { result: {}, error: true };
	} catch (error) {
		return { result: {}, error: true };
	}
};
