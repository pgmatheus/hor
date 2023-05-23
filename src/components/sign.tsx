import { StyleSheet, Text, View } from "react-native";
import translate from "translate";
import React, { useState, useEffect } from "react";

export default function Sign(props) {
	const [translatedText, setTranslatedText] = useState("");

	useEffect(() => {
		// Fetch the translation when the component mounts
		translateText();
	}, []);

	const translateText = async () => {
		try {
			const text = "Hello world"; // The text you want to translate
			const translation = await translate(text, { from: "en", to: "fr" }); // Translate from English to Spanish (you can change the language codes)
			setTranslatedText(translation);
		} catch (error) {
			console.error("Translation error:", error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.avatar}></View>
			<Text style={styles.txt}>{props.txt}</Text>
			<Text>{translatedText}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	avatar: {
		borderRadius: 50,
		width: 70,
		height: 70,
		backgroundColor: "white",
		marginLeft: 15,
		marginRight: 15,
		marginBottom: 5,
	},
	txt: {
		color: "white",
		marginBottom: 15,
	},
});
