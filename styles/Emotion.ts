import { css } from "@emotion/react";

export const sidePadding = css({
  padding: "0 40px",
});

export const translateCenterStyle = css({
  transform: "translate(-50%,-50%)",
});

export const responsiveStyles = css({
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

export const headStyles = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "12px 0",
  margin: "0 auto",
  maxWidth: "1080px",
  backgroundColor: "white",

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

export const backgroundImageStyle = (bg: string) => {
  //image 중심으로
  return css`
    background: url(${bg}) no-repeat center center/cover;
  `;
};
