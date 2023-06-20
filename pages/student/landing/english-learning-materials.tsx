import HeadMeta from "@/common/Head.meta";
import Layout from "@/common/Layout";
import { common } from "@/common/baseurl/api";
import Banner from "@/components/Banner";
import TabAndSection from "@/components/TabAndSection";
import { DataType } from "@/features/common/productReducer";
import { EnglishLearningMenus } from "@/static/tabMenus";
import axios from "axios";

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

export default function EnglishLearningMaterials({
  data,
}: {
  data: DataType[];
}) {
  return (
    <>
      <HeadMeta title="ringle_material" content="교재입니다" name="교재" />
      <Layout>
        <Banner
          text1={"일상 대화부터 시사,"}
          text2={"실전 비즈니스 영어까지"}
          onClickAction={() => console.log("err")}
          buttonTxt={"무료로 교재 먼저 둘러보기"}
          bgImg={
            "https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_1280.jpg"
          }
        />
        <TabAndSection
          data={data}
          tabMenus={EnglishLearningMenus}
          text1="당신의 현실에 맞춘 교재"
          text2="일상 회화부터 시사, 실전 비즈니스 영어까지
          "
          text3="Top MBA 출신 집필진과 튜터들이 매주 업데이트하는 1,200+개의 교재"
        />
      </Layout>
    </>
  );
}
