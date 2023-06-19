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

export const productPost = createAsyncThunk(
  //product 생성
  "productPost",
  async () => {
    const params = {
      title: "test1",
      content:
        "포장마법사 텐도° 입니다. 텐도는 세계 3대 발명대회를 휩쓴 테이프 커터기로 편리한 기능과 뛰어난 디자인을 제공합니다. 4가지의 다양한 신규 컬러들을 ",
      startFunding: "01/01/2023",
      endFunding: "01/01/2023",
      startDelivery: "01/01/2023",
      deliveryFee: 2000,
      productLimit: 210,
      price: 21000,
    };
    const res = await api.post("product", params);
    return res.data;
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
