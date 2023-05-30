import React from "react";
import { View, StyleSheet } from "react-native";
import {
	BannerAd,
	BannerAdSize,
	TestIds,
} from "react-native-google-mobile-ads";
import { ANDROID_KEY } from "@env";

const AdContainer = () => {
	return (
		<View style={styles.container}>
			<BannerAd
				unitId={TestIds.BANNER}
				size={BannerAdSize.BANNER}
				requestOptions={{
					requestNonPersonalizedAdsOnly: true,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 16,
	},
});

export default AdContainer;
