import {
  CaretUpOutlined,
  CaretDownOutlined,
  MinusOutlined,
} from "@ant-design/icons";

interface Props {
  score: number;
}

interface ScoreSigns {
  [key: string]: React.ReactElement;
}

export const ScoreIcon = ({ score }: Props) => {
  const scoreIcons: ScoreSigns = {
    "1": <CaretUpOutlined />,
    "-1": <CaretDownOutlined />,
    "0": <MinusOutlined />,
    "-0": <MinusOutlined />,
    NaN: <MinusOutlined />,
  };

  return (
    <>
      {scoreIcons[Math.sign(score).toString() as keyof ScoreSigns]}
      {score !== 0 && Math.abs(score)}
    </>
  );
};
