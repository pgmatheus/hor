import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { Menu, Pressable, HamburgerIcon, Box, Flex } from "native-base";
import { flexbox } from "native-base/lib/typescript/theme/styled-system";
import { color } from "react-native-reanimated";
import { useState } from "react";
import HamburgerMenu from "./menu";

export const Header = () => {
	return (
		<View style={styles.viewT}>
			<View style={styles.division}>
				<View style={styles.left}>
					<HamburgerMenu />
				</View>
				<View style={styles.center}>
					<Text style={styles.headText}>Zodiax</Text>
				</View>

				{/* <View style={styles.center}>
					
				</View> */}
				<View style={styles.right}></View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	viewT: {
		/* backgroundColor: "transparent", */
		width: "100%",
		position: "absolute",
		top: 10,
		height: 80,
	},
	division: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		/* height: 40, */
	},
	left: {
		width: "20%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	center: {
		width: "60%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	right: {
		width: "20%",
		color: "white",
	},
	headText: {
		fontSize: 36,
		color: "white",
	},

	rel: {
		position: "relative",
	},
	translate: {
		position: "absolute",
		left: 0,
	},
});
