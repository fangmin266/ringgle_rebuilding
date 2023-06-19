import Layout, { sidePadding } from "@/common/Layout";
import Button from "@/components/Button";
import { css } from "@emotion/react";
import React from "react";
import { responsiveStyles } from "../../../common/Layout";

export default function EnglishTutors() {
  const bgimage =
    "https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_1280.jpg";
  const backgroundImageStyle = css`
    background: url(${bgimage}) no-repeat center center/cover;
  `;
  return (
    <>
      <Layout>
        <section className="flex">
          <div
            css={[responsiveStyles, sidePadding]}
            className="py-20 text-white bg-primary_90 text-4xl font-bold flex flex-col justify-center"
          >
            <p>다양한 전공과 관심사를 가진</p>
            <p>명문대 원어민 튜터</p>
            <Button
              buttonClass="text-lg text-primary_100 bg-white rounded-full py-4 w-[280px] mt-12"
              disabled={false}
              handleOnClick={() => {
                console.log("err");
              }}
            >
              무료로 튜터 먼저 둘러보기
            </Button>
          </div>
          <div className="w-full" css={backgroundImageStyle}></div>
        </section>
        <section className="py-32 ">
          <div className="flex flex-col items-center ">
            <p className="text-primary_100 font-semibold ">
              똑똑한 튜터와의 맞춤 수업
            </p>
            <p className="font-bold text-3xl pt-6">
              1000명 이상의 검증된 영미권 명문대 원어민 튜터
            </p>
          </div>
          <div>
            <ul></ul>
          </div>
        </section>
      </Layout>
    </>
  );
}
