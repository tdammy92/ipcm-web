// First, define the reducer and action creators via `createSlice`
import { createSlice} from '@reduxjs/toolkit'
const usersSlice = createSlice({
	name: "users",
	initialState: {
		loading: false,
		details: {},
        isLoggedin:false
	},
	reducers: {
		iSLoading(state, action) {
			state.loading = action.payload;
		},
		saveUser(state, action) {
			state.details = action.payload;
            state.isLoggedin=true;
			state.loading = false;
		},
		LogOutUser(state, action) {
			state.details = {};
            state.isLoggedin=false
		},
	},
});

// Destructure and export the plain action creators
export const { iSLoading, saveUser ,LogOutUser} = usersSlice.actions;

export default usersSlice.reducer;
