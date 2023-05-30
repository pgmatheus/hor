import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableHighlight,
} from "react-native";
import { Box } from "native-base";
import { zodiacSigns } from "../database/database";
import { Background } from "../components/background";

import Sign from "../components/sign";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";

export default function HomeScreen({
	navigation,
}: {
	navigation: StackNavigationProp<RootStackParamList, "Day">;
}) {
	const handleButtonClick = (number: number) => {
		navigation.navigate("SignPrediction", { number: number });
	};
	return (
		<Background>
			<View style={styles.container}>
				<View style={styles.row}>
					<TouchableHighlight onPress={() => handleButtonClick(0)}>
						<Sign txt={zodiacSigns[0]} number={0} />
					</TouchableHighlight>
					<TouchableHighlight onPress={() => handleButtonClick(1)}>
						<Sign txt={zodiacSigns[1]} number={1} />
					</TouchableHighlight>
					<TouchableHighlight onPress={() => handleButtonClick(2)}>
						<Sign txt={zodiacSigns[2]} number={2} />
					</TouchableHighlight>
				</View>
				<View style={styles.row}>
					<TouchableHighlight onPress={() => handleButtonClick(3)}>
						<Sign txt={zodiacSigns[3]} number={3} />
					</TouchableHighlight>
					<TouchableHighlight onPress={() => handleButtonClick(4)}>
						<Sign txt={zodiacSigns[4]} number={4} />
					</TouchableHighlight>
					<TouchableHighlight onPress={() => handleButtonClick(5)}>
						<Sign txt={zodiacSigns[5]} number={5} />
					</TouchableHighlight>
				</View>
				<View style={styles.row}>
					<TouchableHighlight onPress={() => handleButtonClick(6)}>
						<Sign txt={zodiacSigns[6]} number={6} />
					</TouchableHighlight>
					<TouchableHighlight onPress={() => handleButtonClick(7)}>
						<Sign txt={zodiacSigns[7]} number={7} />
					</TouchableHighlight>
					<TouchableHighlight onPress={() => handleButtonClick(8)}>
						<Sign txt={zodiacSigns[8]} number={8} />
					</TouchableHighlight>
				</View>
				<View style={styles.row}>
					<TouchableHighlight onPress={() => handleButtonClick(9)}>
						<Sign txt={zodiacSigns[9]} number={9} />
					</TouchableHighlight>
					<TouchableHighlight onPress={() => handleButtonClick(10)}>
						<Sign txt={zodiacSigns[10]} number={10} />
					</TouchableHighlight>
					<TouchableHighlight onPress={() => handleButtonClick(11)}>
						<Sign txt={zodiacSigns[11]} number={11} />
					</TouchableHighlight>
				</View>
			</View>
		</Background>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		/* height: "100%", */
	},
	row: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
	},
});
