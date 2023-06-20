import HeadMeta from "@/common/Head.meta";
import Layout from "@/common/Layout";
import { productPost } from "@/features/common/productReducer";
import { AppDispatch } from "@/features/store";
import { studentLanding } from "@/static/common/links";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function pricing() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    startFunding: "",
    endFunding: "",
    startDelivery: "",
    deliveryFee: 0,
    productLimit: 0,
    price: 0,
  });

  const inputSector = (prop: keyof typeof inputs) => {
    return (
      <label>
        {prop}:
        <input
          type={
            prop === "deliveryFee" ||
            prop === "productLimit" ||
            prop === "price"
              ? "number"
              : "text"
          }
          name={prop}
          value={inputs[prop] as string}
          onChange={onChangeInputs}
        />
      </label>
    );
  };
  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await dispatch(productPost(inputs)).unwrap();
    try {
      const Data = res.data;
      if (Data.statusCode === 200) {
        alert("글 생성");
        router.push(studentLanding + "/pricing/" + Data.data.id);
      } else {
        alert("글생성 실패");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <HeadMeta title="ringle_pricing" content="가격입니다" name="가격" />
      <Layout>
        <form onSubmit={handleSubmit}>
          {[
            "title",
            "content",
            "startFunding",
            "endFunding",
            "startDelivery",
            "deliveryFee",
            "productLimit",
            "price",
          ].map((el) => (
            <div key={el}>{inputSector(el as keyof typeof inputs)}</div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </Layout>
    </>
  );
}
