import { StyleSheet, Text, View } from "react-native";
import { Box } from "native-base";

import Sign from "../components/sign";

export default function Day() {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Sign txt={"q"} />
				<Sign txt={"Taurus"} />
				<Sign txt={"Gemini"} />
			</View>
			<View style={styles.row}>
				<Sign txt={"Cancer"} />
				<Sign txt={"Leo"} />
				<Sign txt={"Virgo"} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	row: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
});
