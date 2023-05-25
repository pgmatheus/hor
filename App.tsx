import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import styled from "styled-components/native";
import Day from "./src/pages/day";
import { first_run } from "./src/utilities/load_settings";
import { AppContextProvider } from "./src/context/provider";
import { useAppContext } from "./src/context/hook";
import { SignPrediction } from "./src/pages/sign_prediction";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/* import { retrieveSettings } from "../utilities/get_settings"; */

const StyledText = styled.Text`
	color: #d3a0b1;
`;

const StyledView = styled.View`
	background-color: papayawhip;
`;
const Stack = createStackNavigator();
first_run();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name="Day"
					component={Day}
					initialParams={{ sign_show_prediction: -1 }}
				/>
				<Stack.Screen name="SignPrediction" component={SignPrediction} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

{
	/*  */
}
/*  */
{
	/* <ImageBackground
					source={require("./src/background/00.png")}
					style={styles.container}
				>
					<Day />
				</ImageBackground> */
}
