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

export interface DataType {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  content: string;
  startFunding: string;
  endFunding: string;
  startDelivery: string;
  deliveryFee: number;
  productLimit: number;
  price: number;
  productNum: number;
  productImage: string[];
  thumbnail: string;
}
interface inputType {
  title: string;
  content: string;
  startFunding: string;
  endFunding: string;
  startDelivery: string;
  deliveryFee: number;
  productLimit: number;
  price: number;
}

export const productPost = createAsyncThunk(
  //product 생성
  "productPost",
  async (params: inputType) => {
    console.log(params, "params");
    const res = await api.post("product", params);
    return res;
  }
);

export const productGet = createAsyncThunk(
  //product get
  "productGet",
  async () => {
    const res = await api.get("product/all");
    return res.data.data;
  }
);

const productSlice = createSlice({
  name: "섹션",
  initialState,
  reducers: {
    onSetSection: (state, action: PayloadAction<string>) => {
      state.section = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(productPost.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(productGet.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(PURGE, () => initialState);
  },
});

export const { onSetSection } = productSlice.actions;

export default productSlice.reducer;
