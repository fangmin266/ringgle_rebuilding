import { EnglishTutorsMenus } from "@/static/tabMenus";
import { useSelector } from "react-redux";
import { DataType } from "@/features/common/productReducer";
import { RootState } from "@/features/store";
import axios from "axios";
import { common } from "@/common/baseurl/api";
import Layout from "@/common/Layout";
import Banner from "@/components/Banner";
import TabAndSection from "@/components/TabAndSection";
import { PotalComponent } from "@/components/Modal";
import { useEffect } from "react";
import HeadMeta from "@/common/Head.meta";

export async function getServerSideProps() {
  const res = await axios.get(common.baseURL + "product/all");
  if (res.data.statusCode === 200) {
    const data = res.data.data;
    return {
      props: {
        data,
      },
    };
  } else {
    return {
      props: {},
    };
  }
}

export default function EnglishTutors({ data }: { data: DataType[] }) {
  const { modal } = useSelector((state: RootState) => state.common);
  const portalContainer = document.getElementById("portal-container");
  useEffect(() => {
    if (modal) {
      portalContainer?.classList.add("h-screen");
      portalContainer?.classList.add("overflow-hidden");
    } else {
      portalContainer?.classList.remove("h-screen");
      portalContainer?.classList.remove("overflow-hidden");
    }
  }, [modal]);
  return (
    <>
      <HeadMeta title="ringle" content="메인입니다" name="메인" />
      <Layout>
        <Banner
          text1={"다양한 전공과 관심사를 가진"}
          text2={"명문대 원어민 튜터"}
          onClickAction={() => console.log("err")}
          buttonTxt={"무료로 튜터 먼저 둘러보기"}
          bgImg={
            "https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_1280.jpg"
          }
        />
        <TabAndSection
          data={data}
          tabMenus={EnglishTutorsMenus}
          text1="똑똑한 튜터와의 맞춤 수업"
          text2="1000명 이상의 검증된 영미권 명문대 원어민 튜터"
        />
        {modal && (
          <PotalComponent container={portalContainer}>ffffffff</PotalComponent>
        )}
      </Layout>
    </>
  );
}
