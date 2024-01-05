interface Props {
  minute: number;
}

const Timer = ({ minute }: Props) => {
  return <div className="text-center">{minute + ":" + 0}</div>;
};

export default Timer;
