import { css, keyframes } from "@emotion/react";

interface Item {
  id: number;
  cont1?: string;
  cont1Num?: number;
}
interface TextFluidProps {
  items: Item[];
}

const marqueeAnimation = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const csstyles = css`
  white-space: nowrap;
  will-change: transform;
  animation: ${marqueeAnimation} 10s linear infinite;
`;
const csstyles2 = css`
  white-space: nowrap;
  will-change: transform;
  animation: ${marqueeAnimation} 14s linear infinite;
`;
export const TextFluid = ({ items }: TextFluidProps) => {
  const itemList = (items1: Item[]) => {
    return (
      <>
        {items1?.map((el) => (
          <div
            key={el.id}
            className={`${
              el.id % 3 === 0
                ? " bg-primary_130 "
                : el.id % 3 === 1
                ? " bg-primary_120 "
                : " bg-primary_110 "
            } flex flex-col rounded px-3 py-2 text-center`}
          >
            <span>{el.cont1}</span>
            <span>{el.cont1Num} 명</span>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="relative text-primary_100 space-y-4">
      <div css={csstyles}>
        <div className="translate-y-[-calc(100% - 14rem)] md:translate-y-0 flex gap-x-2 text-lg font-bold">
          {itemList(items)}
          {itemList(items)}
          {itemList(items)}
        </div>
      </div>
      <div css={csstyles2}>
        <div className="translate-y-[-calc(100% - 14rem)] md:translate-y-0 flex gap-x-2 text-lg font-bold">
          {itemList(items)}
          {itemList(items)}
          {itemList(items)}
        </div>
      </div>
    </div>
  );
};
