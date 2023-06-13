import React from "react";
import Person2Icon from "@mui/icons-material/Person2";
import Layout, { containerStyles } from "./common/Layout";
import Button from "./components/Button";

export default function Home() {
  return (
    <Layout>
      <section className="w-full bg-white py-48">
        <div className="flex justify-between " css={containerStyles}>
          <div>
            <div className="text-primary_100 text-5xl leading-tight font-semibold tracking-wide">
              <h2>아이비리그 출신</h2>
              <h2>원어민 튜터와 함께하는</h2>
              <h2>1:1 맞춤 화상영어</h2>
            </div>
            <p className="text-secondary_100 font-semibold text-xl pt-4 pb-8">
              당신이 꿈꾸던 영어 실력과 커리어를 링글에서
            </p>
            <Button
              buttonClass="bg-primary_100 text-white text-lg p-4"
              disabled={false}
              handleOnClick={() => {
                alert();
              }}
            >
              4,000원으로 첫 수업 체험하기
            </Button>
          </div>
          <div className="bg-gray-white rounded-md shadow-lg w-1/2 h-80"></div>
        </div>
      </section>
      <section className="w-full bg-primary_90 py-40">
        <div css={containerStyles} className="flex justify-center items-center">
          <div className="w-[680px] bg-white rounded-xl px-4 py-12 ">
            <div className="flex flex-col items-center text-center">
              <div className="flex gap-x-3 items-center">
                <Person2Icon
                  fontSize="large"
                  style={{ color: "rgb(124, 127, 148)" }}
                />
                <p className="text-xl font-bold text-secondary_100">
                  똑똑하고 성실한 튜터
                </p>
              </div>
              <div className="text-4xl font-bold leading-normal pt-4">
                <p>영어로 생각을 나누는</p>
                <p>명문대 원어민 튜터</p>
              </div>
              <div className="text-lg text-secondary_100 font-semibold ">
                <p>원어민은 많지만 고급 표현과 영어로</p>
                <p>생각하는 법을 배울수 있는 튜터는 따로 있죠.</p>
              </div>
            </div>
            <div className="bg-red-500 py-6 mt-12">slider</div>
          </div>
        </div>
      </section>
      <section className="w-full bg-primary_90 py-40">
        <div className="flex justify-between" css={containerStyles}>
          <div>1</div>
          <div>2</div>
        </div>
      </section>
    </Layout>
  );
}
