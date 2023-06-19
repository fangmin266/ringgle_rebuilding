import { responsiveStyles } from "@/common/Layout";
import { css } from "@emotion/react";

export default function GradientImage({
  bgimage,
  text,
}: {
  bgimage: string;
  text: string;
}) {
  const backgroundImageStyle = css`
    background-image: url(${bgimage});
  `;
  return (
    <section className="bg-primary_90">
      <div css={responsiveStyles}>
        <div className="relative w-full h-[600px]">
          <div
            className={`absolute inset-0 flex items-center flex-col bg-no-repeat bg-cover `}
            css={backgroundImageStyle}
          >
            <div className="w-full h-[35%] bg-gradient-to-t from-transparent via-transparent to-primary_90 ]"></div>
            <div className="bg-transparent h-[30%] w-full"></div>
            <div className="w-full h-[35%] bg-gradient-to-t from-primary_90 via-transparent to-transparent relative">
              <div className="absolute bottom-0 left-0 text-white p-6 w-full">
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
