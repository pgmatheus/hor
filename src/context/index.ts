import { createContext } from "react";

export const INITIAL_STATE = {
	language: "en",
};

export const AppContext = createContext({
	state: INITIAL_STATE,
});
