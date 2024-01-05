interface Props {
  minute: number;
  seconds: number;
}

const Timer = ({ minute, seconds }: Props) => {
  return <div className="text-center">{minute + ":" + seconds}</div>;
};

export default Timer;
