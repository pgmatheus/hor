import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import styled from "styled-components/native";

const StyledText = styled.Text`
	color: #d3a0b1;
`;

const StyledView = styled.View`
	background-color: papayawhip;
`;

export default function App() {
	return (
		<NativeBaseProvider>
			<Box>Hello world</Box>
			<Text>Hello world2</Text>
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
