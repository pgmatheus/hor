import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { ReactNode } from "react";
import { Header } from "./header";
import AdContainer from "./ads";
import { color } from "react-native-reanimated";

interface IProps {
	children: ReactNode;
}

export const Background = ({ children }: IProps) => {
	return (
		<ImageBackground source={require("../img/00.png")} style={styles.container}>
			<Header />
			{/* <Text style={styles.test}>qqqqqqqqqqqqqqqqqqqqqqqqqs</Text> */}
			{/* {children} */}
			{/* <AdContainer /> */}
		</ImageBackground>
	);
};

{
	/*  */
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		position: "relative",
	},
	test: {
		color: "white",
	},
});
