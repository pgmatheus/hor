import { StyleSheet, Text, View } from "react-native";
import { translateText } from "../utilities/transl";
import { zodiacSigns } from "../database/database";
import { retrieveSettings } from "../utilities/get_settings";

import React, { useState, useEffect } from "react";

type SignProps = {
	txt: string;
	number: number;
};

export default function Sign(props: SignProps) {
	const [text_Trans, setText_Trans] = useState(zodiacSigns[props.number]);

	useEffect(() => {
		retrieveSettings().then((result) => {
			if (!result.error) {
				setText_Trans(result.result.zodiacSigns[props.number]);
			}
		});
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.avatar}></View>
			<Text style={styles.txt}>{text_Trans}</Text>
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
		width: 65,
		height: 65,
		backgroundColor: "white",
		marginLeft: 15,
		marginRight: 15,
		marginBottom: 5,
	},
	txt: {
		color: "white",
		marginBottom: 25,
	},
});
