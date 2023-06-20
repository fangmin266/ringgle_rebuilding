import React, { RefObject, useEffect, useRef, useState } from "react";
import Person2Icon from "@mui/icons-material/Person2";

import { useTransform, motion, useScroll } from "framer-motion";
import { css, keyframes } from "@emotion/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TextFluid } from "@/components/home/TextFluid";
import GradientImage from "@/components/home/GradientImage";
import { fluidData1 } from "@/static/fluidData";
import HalfLayout from "@/components/home/HalfLayout";
import Button from "@/components/Button";
import OneToOneChat from "@/common/OneToOneChat";
import Layout from "@/common/Layout";
import { responsiveStyles } from "@/styles/Emotion";

export default function Home() {
  const [activeChat, setActiveChat] = useState<boolean>(false);
  const { scrollY } = useScroll();

  // 스크롤 값에 따라 애니메이션에 사용할 변수 생성
  const visibility = useTransform(scrollY, [1000, 1100], [0, 1]);
  const [scrollRange, setScrollRange] = useState([0, 0]);
  const visibility2 = useTransform(scrollY, scrollRange, [0, 1]);
  const scrollRef: RefObject<Element> = useRef(null);
  const targetId = "myTargetId";

  useEffect(() => {
    //document dom 접근은 useEffect handler 내에서만 가능
    const handleScroll = () => {
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const { offsetTop } = targetElement;
        const targetScrollPosition = offsetTop;
        const currentScrollPositon = scrollY.get();
        if (currentScrollPositon > targetScrollPosition - window.innerHeight) {
          setScrollRange([
            targetScrollPosition - window.innerHeight,
            targetScrollPosition,
          ]);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, visibility2, targetId]);

  const moveDownId = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Layout>
        <section className="w-full bg-white py-28">
          <div className="flex justify-between " css={responsiveStyles}>
            <div>
              <div className="text-primary_100 text-5xl leading-tight font-semibold tracking-wide">
                <h2>아이비리그 출신</h2>
                <h2>원어민 튜터와 함께하는</h2>
                <h2>1:1 맞춤 화상영어</h2>
              </div>
              <p className="text-secondary_100 font-semibold text-xl pt-4 pb-8">
                당신이 꿈꾸던 영어 실력과 커리어를 링글에서
              </p>
            </div>
            <div className="bg-gray-white rounded-md shadow-lg w-1/2 h-80"></div>
          </div>
        </section>
        <div
          css={arrowStyles}
          className="flex justify-center py-20 w-full cursor-pointer"
          onClick={moveDownId}
        >
          <ExpandMoreIcon
            style={{ fontSize: "48px", color: "rgb(124, 127, 148)" }}
          />
        </div>
        <section className="w-full bg-primary_90 pt-20">
          <div
            css={responsiveStyles}
            className="flex justify-center items-center"
          >
            <div className="w-[680px] bg-white rounded-xl py-12 ">
              <div className="flex flex-col items-center text-center mx-4 overflow-hidden">
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
                <div className="mt-12">
                  <TextFluid items={fluidData1} items2={fluidData1} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <HalfLayout
          scrollRef={scrollRef}
          title={"머릿 속에서 번역하고"}
          title2={"말하느라 영어가"}
          title3={"원어민의 영어를 알려주는"}
          title4={"튜터와 연습하세요."}
          subtitle={
            "단순한 문법 교정을 넘어 현지 원어민의 고급 표현과 논리적인 문장 구조를 링글 튜터에게 배워보세요. 훨씬 자연스러운 영어가 가능해집니다."
          }
          rightImage={true}
        />
        <GradientImage
          bgimage="https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_1280.jpg"
          text="링글 튜터 | 물리학 전공"
        />
        <HalfLayout
          scrollRef={scrollRef}
          title={"아이비리그 학생들의 "}
          title2={"영어, 경험을 훔칠 수 있다면?"}
          title3={"상위 1% 실력의"}
          title4={"튜터를 만나보세요."}
          subtitle={
            "링글의 튜터들은 대학 입학을 준비할 때부터 최고 수준의 논리적 사고력과 에세이 실력을 매일 갈고닦습니다. 영∙미 상위 1% 학생들이 가진 고급 표현력, 글쓰기 역량은 오직 링글에서만 배울 수 있습니다."
          }
        />
        <GradientImage
          bgimage="https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_1280.jpg"
          text="링글 튜터 | 물리학 전공"
        />
        <HalfLayout
          title={"대학생 튜터는"}
          title2={"비즈니스 영어를 못한다?"}
          title3={"나이보다 논리적 설득력이"}
          title4={"더 중요합니다."}
          subtitle={
            "사회생활 경험이 비즈니스 영어를 잘하기 위한 필수 조건일까요? 비즈니스 환경의 커뮤니케이션에서 중요한 것은 영어에 설득력을 더하는 일입니다."
          }
          subtitle2={
            "영∙미 명문대 학생들은 교수와 동료를 설득해야하는 치열한 환경 속에서 어떤 상황에서도 논리적인 설득과 생각 구조화를 할 수 있도록 훈련 받습니다."
          }
          subtitle3={
            "단순히 비즈니스 용어만 배우는 게 아니라, 영어로 내 생각을 잘 전달하는 법을 배울 수 있는 곳은 링글밖에 없습니다."
          }
        />
        <section
          id={targetId}
          className="py-20 bg-primary_90 font-bold leading-normal text-white text-6xl text-center"
        >
          <motion.div
            style={{
              opacity: visibility2,
              transition: "opacity 0.2s ease",
            }}
          >
            <div>링글의 수업 시스템이</div>
            <div>튜터와의 시간을</div>
            <div>더욱 가치있게 해줍니다.</div>
          </motion.div>
        </section>
      </Layout>
      <motion.div
        style={{
          opacity: visibility,
          position: "fixed",
          bottom: "20px",
          right: "50%",
          width: "800px",
          transform: "translateX(50%)",
        }}
      >
        <Button
          disabled={false}
          buttonClass="bg-home_btn rounded-full py-6 w-full text-center text-xl text-white"
          handleOnClick={() => {
            alert();
          }}
        >
          4,000원으로 첫 수업 시작하기
        </Button>
      </motion.div>

      <div className="absolute bottom-2 right-2">
        {activeChat && <OneToOneChat />}

        <div
          className="fixed bottom-2 right-2 w-16 h-16 rounded-full bg-white"
          onClick={() => {
            setActiveChat(!activeChat);
          }}
        >
          채팅하기
        </div>
      </div>
    </>
  );
}
const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const arrowStyles = css`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${bounceAnimation} 1s infinite;
`;
