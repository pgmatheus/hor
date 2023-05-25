import { useContext } from "react";
import { AppContext } from "./index";

export const useAppContext = () => {
	const context = useContext(AppContext);
	return context;
};
