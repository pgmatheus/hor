import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import styled from "styled-components/native";
import Day from "./src/pages/day";
import { first_run } from "./src/utilities/load_settings";

/* import { retrieveSettings } from "../utilities/get_settings"; */

const StyledText = styled.Text`
	color: #d3a0b1;
`;

const StyledView = styled.View`
	background-color: papayawhip;
`;

first_run();

export default function App() {
	/* 	useEffect(() => {
		retrieveSettings().then((result) => {
			if (!result.error) {
				setText_Trans(result.result.zodiacSigns[props.number]);
			}
		});
	}, []); */

	return (
		<NativeBaseProvider>
			<ImageBackground
				source={require("./src/background/00.png")}
				style={styles.container}
			>
				<Day />
			</ImageBackground>
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		resizeMode: "cover", // or 'contain' to adjust the image size
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
});
