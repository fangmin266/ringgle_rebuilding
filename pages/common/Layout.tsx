import "../../styles/Common.module.css";
import { useRouter } from "next/router";
import Button from "../components/Button";
import { css } from "@emotion/react";
import HeadMeta from "./Head.meta";
import Link from "next/link";
import { navLinks } from "../static/links";
import { useState } from "react";
import { footerList1, footerList2 } from "../static/footer";
import Footer from "./Footer";
import OneToOneChat from "./OneToOneChat";

export default function Layout({ children }: { children: React.ReactNode }) {
  const url = useRouter().query;
  const [activeLink, setActiveLink] = useState<string>("/");
  const [activeChat, setActiveChat] = useState<boolean>(false);
  console.log(activeLink, "activeLink!");
  return (
    <div className="relative">
      <HeadMeta />
      <div css={headStyles}>
        <Link legacyBehavior href="/">
          <a className="text-primary_100 font-bold text-2xl">Ringle</a>
        </Link>
        <nav>
          <ul className="flex gap-x-8">
            {navLinks?.map((el, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setActiveLink(el.link);
                }}
              >
                <Link legacyBehavior href={el.link}>
                  <a
                    className={
                      ` text-sm ` +
                      (activeLink === el.link
                        ? "text-black"
                        : "text-secondary_100")
                    }
                  >
                    {el.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-x-3">
          <Button
            disabled={false}
            buttonClass="border border-primary_100 text-primary_100"
            handleOnClick={() => {
              alert("button");
            }}
          >
            로그인
          </Button>
          <Button
            disabled={false}
            buttonClass=" bg-primary_100 text-white"
            handleOnClick={() => {
              alert("button");
            }}
          >
            회원가입
          </Button>
        </div>
      </div>
      <main>{children}</main>
      <Footer />
      <div className="absolute bottom-2 right-2">
        {activeChat && <OneToOneChat />}

        <div
          className="absolute bottom-0 right-0 w-16 h-16 rounded-full bg-white"
          onClick={() => {
            setActiveChat(!activeChat);
          }}
        >
          채팅하기
        </div>
      </div>
    </div>
  );
}
export const containerStyles = css({
  margin: "0 auto",
  maxWidth: "1080px",

  "@media (min-width: 1200px)": {
    //min 1200
  },
  "@media (max-width: 1199px) and (min-width: 800px)": {
    padding: "0 48px",
    color: "red",
  },
  "@media (max-width: 799px)": {
    padding: "0 20px",
    backgroundColor: "yellow",
  },
});

const headStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 0",
  margin: "0 auto",
  maxWidth: "1080px",

  "@media (min-width: 1200px)": {
    //min 1200
  },
  "@media (max-width: 1199px) and (min-width: 800px)": {
    padding: "12px 48px",
    color: "red",
  },
  "@media (max-width: 799px)": {
    padding: "12px 20px",
    backgroundColor: "yellow",
  },
});
