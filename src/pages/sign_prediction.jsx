import { Background } from "../components/background";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export const SignPrediction = ({ route }) => {
	/* const route = useRoute(); */
	const { number } = route.params;
	/* const exampleProp = route.params?.exampleProp; */
	return (
		<Background>
			<Text>{number}</Text>
		</Background>
	);
};
