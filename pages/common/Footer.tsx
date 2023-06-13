import React from "react";
import { containerStyles } from "./Layout";
import { footerList1, footerList2 } from "../static/footer";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary_80 py-12 text-white">
      <div css={containerStyles}>
        <ul className="flex justify-between w-full">
          <li className="text-xs w-1/3">
            <div className="py-2 text-secondary_100">
              <p className="text-xs">3년 연속 선정</p>
              <h4 className="text-3xl font-crimson leading-7">KCAB</h4>
              <p className="text-xs">한국소비자 평가 최고의 브랜드</p>
            </div>
            {footerList1?.map((el) => (
              <p key={el.id}>{el.title}</p>
            ))}
            <div className="flex gap-x-2 pt-4 text-center">
              <span className="bg-black text-white p-2 rounded-sm w-24 block">
                ff
              </span>
              <span className="bg-black text-white p-2 rounded-sm w-24 block">
                ff
              </span>
            </div>
          </li>
          <li className="border-x px-16 py-6 w-1/3 border-secondary_100">
            <ul className="text-sm grid grid-cols-2 gap-y-4 gap-x-10">
              {footerList2?.map((el) => (
                <p key={el.id}>{el.title}</p>
              ))}
            </ul>
          </li>
          <li className="w-1/3 text-sm px-16 py-3 flex flex-col gap-y-2">
            <div className=" font-bold px-6 py-4 rounded-md bg-secondary_100 ">
              자주 묻는 질문
            </div>
            <div className="font-bold px-6 py-4 rounded-md bg-secondary_100 ">
              자주 묻는 질문
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
