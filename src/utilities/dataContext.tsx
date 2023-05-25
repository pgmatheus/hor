import React, { createContext, useEffect, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type SettingsContextType = {
	settings: Settings | null;
	saveSettings: (newSettings: Settings) => void;
};

type Settings = {
	// Define your settings properties here
};

const initialSettings: Settings = {
	// Set initial default values for your settings here
};

export const SettingsContext = createContext<SettingsContextType>({
	settings: initialSettings,
	saveSettings: () => {},
});

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [settings, setSettings] = useState<Settings | null>(null);

	useEffect(() => {
		loadSettings();
	}, []);

	const loadSettings = async () => {
		try {
			const settingsData = await AsyncStorage.getItem("settings");

			if (settingsData) {
				const parsedSettings = JSON.parse(settingsData);
				setSettings(parsedSettings);
			} else {
				setSettings(initialSettings);
			}
		} catch (error) {
			console.error("Error loading settings:", error);
		}
	};

	const saveSettings = async (newSettings: Settings) => {
		try {
			const settingsData = JSON.stringify(newSettings);
			await AsyncStorage.setItem("settings", settingsData);
			setSettings(newSettings);
		} catch (error) {
			console.error("Error saving settings:", error);
		}
	};

	return (
		<SettingsContext.Provider value={{ settings, saveSettings }}>
			{children}
		</SettingsContext.Provider>
	);
};
