import { containerStyles } from "@/common/Layout";
import React from "react";

export default function HalfLayout({
  scrollRef,
  title,
  title2,
  title3,
  title4,
  subtitle,
  subtitle2,
  subtitle3,
  rightImage,
}: {
  scrollRef?: React.RefObject<any>;
  title: React.ReactNode;
  title2: React.ReactNode;
  title3: React.ReactNode;
  title4: React.ReactNode;
  subtitle: React.ReactNode;
  subtitle2?: React.ReactNode;
  subtitle3?: React.ReactNode;
  rightImage?: boolean;
}) {
  return (
    <section className="w-full bg-primary_90 py-40" ref={scrollRef}>
      <div className="flex gap-x-4" css={containerStyles}>
        <div className="flex-1 text-4xl font-bold text-white leading-normal">
          <p>{title}</p>
          <p>{title2}</p>
          <div className="text-[#CBC5F0]">
            <p>{title3}</p>
            <p>{title4}</p>
          </div>
        </div>
        <div className="flex-1 text-xl font-semibold text-[#CBC5F0] leading-8 space-y-4">
          <p>{subtitle}</p>
          <p>{subtitle2}</p>
          <p>{subtitle3}</p>
          {rightImage && (
            <div>
              <div className="w-full h-60 bg-white rounded-lg"></div>
              <p className="text-center text-white text-base font-normal pt-6">
                수업 중 사용하는 링글 닥스. 튜터가 교정을 적으며 알려줘요.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
