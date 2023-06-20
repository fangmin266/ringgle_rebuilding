import HeadMeta from "@/common/Head.meta";
import Layout from "@/common/Layout";
import { common } from "@/common/baseurl/api";
import { DataType } from "@/features/common/productReducer";
import axios from "axios";

export async function getServerSideProps(context: any) {
  const { title } = context.query;
  const res = await axios.get(common.baseURL + `product/${title}`);
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

export default function PricingTitle({ data }: { data: DataType }) {
  return (
    <>
      <HeadMeta
        title={data?.title}
        content={data?.content}
        name={data?.title}
      />
      <Layout>[title] {data.id}</Layout>
    </>
  );
}
