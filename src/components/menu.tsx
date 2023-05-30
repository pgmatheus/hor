import React, { useState } from "react";
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Text,
	Modal,
	TouchableWithoutFeedback,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const HamburgerMenu: React.FC = () => {
	const [isDropdownVisible, setDropdownVisible] = useState(false);

	const toggleDropdown = () => {
		setDropdownVisible(!isDropdownVisible);
	};

	const handleDropdownDismiss = () => {
		setDropdownVisible(false);
	};

	return (
		<View>
			<TouchableOpacity style={styles.menuButton} onPress={toggleDropdown}>
				<MaterialIcons name="menu" size={24} color="white" />
			</TouchableOpacity>
			<Modal visible={isDropdownVisible} transparent animationType="fade">
				<TouchableWithoutFeedback onPress={handleDropdownDismiss}>
					<View style={styles.modalOverlay}>
						<View style={styles.dropdown}>
							<Text style={styles.menuText}>Menu Item 1</Text>
							<Text style={styles.menuText}>Menu Item 2</Text>
							<Text style={styles.menuText}>Menu Item 3</Text>
							{/* Add more menu items as needed */}
						</View>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	menuButton: {
		marginLeft: 10,
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	dropdown: {
		position: "absolute",
		left: 0,
		top: 0,
		backgroundColor: "white",
		padding: 10,
		borderRadius: 0,
		height: "100%",
	},
	menuText: {},
});

export default HamburgerMenu;
