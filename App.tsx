import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import styled from "styled-components/native";
import Day from "./src/pages/day";

const StyledText = styled.Text`
	color: #d3a0b1;
`;

const StyledView = styled.View`
	background-color: papayawhip;
`;

export default function App() {
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
