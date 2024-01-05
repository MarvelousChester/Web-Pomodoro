interface Props {
  minute: number;
}

const Timer = ({ minute }: Props) => {
  return <div className="text-center">{minute + ":"}</div>;
};

export default Timer;
