import { StyleSheet, Text, View } from "react-native";
import { Box } from "native-base";
import { zodiacSigns } from "../database/database";

import Sign from "../components/sign";

export default function Day() {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Sign txt={zodiacSigns[0]} number={0} />
				<Sign txt={zodiacSigns[1]} number={1} />
				<Sign txt={zodiacSigns[2]} number={2} />
			</View>
			<View style={styles.row}>
				<Sign txt={zodiacSigns[3]} number={3} />
				<Sign txt={zodiacSigns[4]} number={4} />
				<Sign txt={zodiacSigns[5]} number={5} />
			</View>
			<View style={styles.row}>
				<Sign txt={zodiacSigns[6]} number={6} />
				<Sign txt={zodiacSigns[7]} number={7} />
				<Sign txt={zodiacSigns[8]} number={8} />
			</View>
			<View style={styles.row}>
				<Sign txt={zodiacSigns[9]} number={9} />
				<Sign txt={zodiacSigns[10]} number={10} />
				<Sign txt={zodiacSigns[11]} number={11} />
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
