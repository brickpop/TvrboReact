const initialState = [];

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case "SET":
			if (action.entries) return action.entries;
			else return state;

		default:
			return state;
	}
}
