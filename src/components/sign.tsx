import { StyleSheet, Text, View } from "react-native";
import { translateText } from "../utilities/transl";

import React, { useState, useEffect } from "react";

export default function Sign(props) {
	const [text_Trans, setText_Trans] = useState("b");

	useEffect(() => {
		// Fetch the translation when the component mounts
		translateText(props.txt, "fr").then((result) => {
			setText_Trans(result);
		});
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.avatar}></View>
			<Text style={styles.txt}>{props.txt}</Text>
			<Text>{text_Trans}</Text>
			<Text>q</Text>
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
