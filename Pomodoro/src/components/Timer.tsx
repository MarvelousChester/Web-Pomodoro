import { useEffect, useState } from "react";

interface Props {
  minute: number;
}

const Timer = ({ minute }: Props) => {
  // Add CountDown Timer
  const [timerMinute, setTimerMinute] = useState(0);
  const [timerSecond, setTimerSecond] = useState(5);
  // SergeQuadrado
  const [alarmSound] = useState(
    new Audio(
      "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg"
    )
  );

  const decrementTimer = () => {
    if (timerSecond <= 0) {
      setTimerMinute(timerMinute - 1);
      setTimerSecond(59);
    } else {
      setTimerSecond(timerSecond - 1);
    }
  };

  useEffect(() => {
    // counts down and then stops the timer
    if (timerSecond == 0 && timerMinute == 0) {
      alarmSound.play();
      return;
    }
    const countdown = setInterval(decrementTimer, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, [timerSecond]); // everytime timerSecond changes, it will run

  // Interval that calls Decrement timer every 1 second

  return (
    <div className="text-center">
      {timerMinute + ":" + (timerSecond < 10 ? "0" + timerSecond : timerSecond)}
    </div>
  );
};

export default Timer;
