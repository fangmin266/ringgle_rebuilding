import api from "@/common/baseurl/api";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface CommonState {
  section: string;
  subSection: string;
  i: number;
  status: null | string;
}

const initialState: CommonState = {
  section: "홈",
  subSection: "커뮤니티",
  i: 0,
  status: null,
};
interface SignupState {
  email: string;
  password: string;
  username: string;
  isPersonalInfo: boolean;
}

export const emailSignup = createAsyncThunk(
  //일반 회원가입
  "emailSignup",
  async (params: SignupState) => {
    const res = await api.post("auth/signup", params);
    return res.data;
  }
);

const commonSlice = createSlice({
  name: "섹션",
  initialState,
  reducers: {
    onSetSection: (state, action: PayloadAction<string>) => {
      state.section = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(emailSignup.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(PURGE, () => initialState);
  },
});

export const { onSetSection } = commonSlice.actions;

export default commonSlice.reducer;
