import { backgroundImageStyle, responsiveStyles } from "@/styles/Emotion";
import Button from "./Button";

interface BannerType {
  text1: string;
  text2: string;
  onClickAction: () => void;
  buttonTxt: string;
  bgImg: string;
}

export default function Banner({
  text1,
  text2,
  onClickAction,
  buttonTxt,
  bgImg,
}: BannerType) {
  return (
    <section className="flex bg-primary_90 text-white text-4xl font-bold ">
      <div
        css={[responsiveStyles]}
        className="px-28 py-20 flex flex-col justify-center"
      >
        <p>{text1}</p>
        <p>{text2}</p>
        <Button
          buttonClass="text-lg text-primary_100 bg-white rounded-full py-4 w-[280px] mt-12"
          disabled={false}
          handleOnClick={onClickAction}
        >
          {buttonTxt}
        </Button>
      </div>
      <div className="w-full" css={backgroundImageStyle(bgImg)}></div>
    </section>
  );
}
