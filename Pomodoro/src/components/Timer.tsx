import { useEffect, useState } from "react";

interface Props {
  minute: number;
}

const Timer = ({ minute }: Props) => {
  // Add CountDown Timer

  const [timerMinute, setTimerMinute] = useState(minute);
  const [timerSecond, setTimerSecond] = useState(10);

  const decrementTimer = () => {
    if (timerSecond <= 0) {
      setTimerMinute(timerMinute - 1);
      setTimerSecond(59);
    } else {
      setTimerSecond(timerSecond - 1);
    }
    console.log("donw");
  };

  useEffect(() => {
    // counts down and then stops the timer
    if (timerSecond == 0 && timerMinute == 0) {
      return;
    }
    const countdown = setInterval(decrementTimer, 1000);

    return () => clearInterval(countdown);
  }, [timerSecond]);

  // Interval that calls Decrement timer every 1 second

  return (
    <div className="text-center">
      {timerMinute + ":" + (timerSecond < 10 ? "0" + timerSecond : timerSecond)}
    </div>
  );
};

export default Timer;
