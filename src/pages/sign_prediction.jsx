import { Background } from "../components/background";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

export const SignPrediction = () => {
	const route = useRoute();
	const exampleProp = route.params?.exampleProp;
	return (
		<Background>
			<Text>AAAAAAAAAA</Text>
		</Background>
	);
};
