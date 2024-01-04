interface Props {
  minute: number;
  seconds: number;
}

const Timer = ({ minute, seconds }: Props) => {
  return <div className="text-center fs-1">{minute + ":" + seconds}</div>;
};

export default Timer;
