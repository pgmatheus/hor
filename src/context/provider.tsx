import { ReactNode, useReducer } from "react";
import { AppContext, INITIAL_STATE } from "./index";
import { appContextReducer } from "./reducer";

interface IProps {
	children: ReactNode;
}

export const AppContextProvider = ({ children }: IProps) => {
	const [state, dispatch] = useReducer(appContextReducer, INITIAL_STATE);

	return (
		<AppContext.Provider
			value={{
				state,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
