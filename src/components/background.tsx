import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { ReactNode } from "react";

interface IProps {
	children: ReactNode;
}

export const Background = ({ children }: IProps) => {
	return (
		<ImageBackground source={require("../img/00.png")} style={styles.container}>
			{children}
		</ImageBackground>
	);
};

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
