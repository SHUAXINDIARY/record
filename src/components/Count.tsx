import { useEffect, useState } from "react";

const Count = (props: any) => {
  const [countState, setCountState] = useState<{
    countLoveDay: number;
    countKnowDay: number;
  }>({
    countKnowDay: 0,
    countLoveDay: 0,
  });
  useEffect(() => {
    const countLoveDay = Math.ceil(
      // @ts-ignore
      (new Date() - new Date("2020-11-01")) / (1000 * 60 * 60 * 24)
    );

    const countKnowDay = Math.ceil(
      // @ts-ignore
      (new Date() - new Date("2018-08-11")) / (1000 * 60 * 60 * 24)
    );
    setCountState({
      countKnowDay: countKnowDay,
      countLoveDay: countLoveDay,
    });
  }, []);
  return (
    <div>
      <p>
        在一起的第 {countState.countLoveDay || "-"} 天 相识的第{" "}
        {countState.countKnowDay || "-"} 天
      </p>
    </div>
  );
};

export default Count;
