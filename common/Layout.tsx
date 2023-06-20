import { useRouter } from "next/router";
import HeadMeta from "./Head.meta";
import Link from "next/link";
import { useState } from "react";
import Footer from "./Footer";
import Button from "@/components/Button";
import { navLinks, studentLanding } from "@/static/common/links";
import { headStyles } from "@/styles/Emotion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [activeLink, setActiveLink] = useState<string>("/");

  return (
    <>
      <div id="portal-container">
        <div css={headStyles}>
          <Link legacyBehavior href={studentLanding + "/home"}>
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
              buttonClass="border border-primary_100 text-primary_100 rounded"
              handleOnClick={() => {
                alert("button");
              }}
            >
              로그인
            </Button>
            <Button
              disabled={false}
              buttonClass=" bg-primary_100 text-white rounded"
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
      </div>
    </>
  );
}
