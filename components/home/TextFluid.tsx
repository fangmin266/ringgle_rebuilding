import Marquee from "react-fast-marquee";
interface Item {
  id: number;
  cont1?: string;
  cont1Num?: number;
}
interface TextFluidProps {
  items: Item[];
  items2: Item[];
}

export const TextFluid = ({ items, items2 }: TextFluidProps) => {
  const itemList = (items1: Item[]) => {
    return (
      <div className="">
        {items1?.map((el) => (
          <div
            key={el.id}
            className={`${
              el.id % 3 === 0
                ? " bg-primary_130 "
                : el.id % 3 === 1
                ? " bg-primary_120 "
                : " bg-primary_110 "
            } rounded px-3 py-2 text-center inline-block mx-2`}
          >
            {el.cont1}
            <br />
            {el.cont1Num} 명
          </div>
        ))}
      </div>
    );
  };
  const itemList2 = (items1: Item[]) => {
    return (
      <div className="">
        {items1?.map((el) => (
          <div
            key={el.id}
            className={`${
              el.id % 3 === 0
                ? " bg-primary_120 "
                : el.id % 3 === 1
                ? " bg-primary_130 "
                : " bg-primary_110 "
            } rounded px-3 py-2 text-center inline-block mx-2`}
          >
            #{el.cont1}
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="space-y-4">
      <Marquee speed={50}>{itemList(items)}</Marquee>
      <Marquee speed={20}>{itemList2(items2)}</Marquee>
    </div>
  );
};
