import { INITIAL_STATE } from "./index";

enum Settings {
	CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
}

interface IDispatchAction {
	type: Settings;
	payload: any;
}

export const appContextReducer = (
	state = INITIAL_STATE,
	action: IDispatchAction
) => {
	switch (action.type) {
		case Settings.CHANGE_LANGUAGE:
			return state;
			break;
		default:
			/* const exhaustiveCheck: never = action;
			 */
			throw new Error("Unhandled action type");
	}
};

let z = appContextReducer(undefined, {
	type: Settings.CHANGE_LANGUAGE,
	payload: undefined,
});
