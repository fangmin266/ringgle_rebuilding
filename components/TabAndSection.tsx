import {
  onClickTutorCategory,
  openModal,
} from "@/features/common/commonReducer";
import { DataType } from "@/features/common/productReducer";
import { AppDispatch, RootState } from "@/features/store";
import { EnglishTutorsMenusType } from "@/static/tabMenus";
import { backgroundImageStyle } from "@/styles/Emotion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface TabAndSectionType {
  data: DataType[];
  tabMenus: EnglishTutorsMenusType[];
  text1: string;
  text2: string;
  text3?: string;
}
export default function TabAndSection({
  data,
  tabMenus,
  text1,
  text2,
  text3,
}: TabAndSectionType) {
  const dispatch = useDispatch<AppDispatch>();
  const { tutorCategory, modal } = useSelector(
    (state: RootState) => state.common
  );

  const dataSlice = (tab: string) => {
    const path = useRouter().pathname;
    if (path.includes("tutor")) {
      //튜터
      if (tab === "경영/경제" || tab === "영어/교육") {
        return data?.slice(0, 5);
      } else if (tab === "공학" || tab === "의학" || tab === "영작") {
        return data?.slice(3, 8);
      } else if (tab === "교정" || tab === "마케팅") {
        return data?.slice(5, 10);
      }
    } else {
      //교재
      if (tab === "인기 교재") {
        return data?.slice(0, 5);
      } else if (tab === "최신 교재") {
        return data?.slice(3, 8);
      } else if (tab === "자유주제") {
        return data?.slice(5, 10);
      }
    }
  };
  return (
    <section className="py-32 flex flex-col items-center ">
      <p className="text-primary_100 font-semibold ">{text1}</p>
      <p className="font-bold text-3xl pt-6">{text2}</p>
      <p className=" pt-6">{text3}</p>
      <div className="w-[900px] pt-16">
        <ul className="flex cursor-pointer text-sm">
          {tabMenus?.map((el) => (
            <li
              key={el.id}
              className="flex-1 relative"
              onClick={() => dispatch(onClickTutorCategory(el.title))}
            >
              <span
                className={`w-full block py-3 text-center ${
                  tutorCategory === el.title
                    ? " bg-gray_100_opacity text-primary_100 "
                    : " opacity-30 "
                }`}
              >
                {el.title}
              </span>
              <div
                className={`absolute bottom-0 left-0 w-full border-[0.5px] ${
                  tutorCategory === el.title
                    ? " border-primary_100 "
                    : " border-gray_100 "
                }`}
              ></div>
            </li>
          ))}
        </ul>
        <ul className="flex gap-x-4 pt-6">
          {dataSlice(tutorCategory)?.map(
            (el) =>
              el &&
              el.thumbnail && (
                <li
                  key={el.id}
                  className="flex-1 rounded shadow-md"
                  onClick={() => {
                    dispatch(openModal(modal));
                  }}
                >
                  <div
                    className={"h-20"}
                    css={backgroundImageStyle(el?.thumbnail)}
                  ></div>
                  <div className="p-6">
                    <p className="font-bold">{el?.title}</p>
                    <p className="text-sm text-gray-500">{el?.content}</p>
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
    </section>
  );
}
