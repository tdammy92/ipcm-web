// First, define the reducer and action creators via `createSlice`
import { createSlice} from '@reduxjs/toolkit'
const usersSlice = createSlice({
	name: "users",
	initialState: {
		details: {},
        isLoggedin:false
	},
	reducers: {
		saveUser(state, action) {
			state.details = action.payload;
            state.isLoggedin=true;
		},
		LogOutUser(state, action) {
			state.details = {};
            state.isLoggedin=false
		},
	},
});

// Destructure and export the plain action creators
export const {  saveUser ,LogOutUser} = usersSlice.actions;

export default usersSlice.reducer;
