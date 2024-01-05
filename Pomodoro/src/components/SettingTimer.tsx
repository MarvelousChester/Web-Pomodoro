/*
    Purpose: Allow user to set the time for the pomodoro timer passed in callback function
*/
import { useState } from "react";

interface Props {
  minuteInit: number;
  secondInit: number;
  onTimeChange: (time: number) => void;
}

const SettingTimer = ({ minuteInit, secondInit, onTimeChange }: Props) => {
  const [minute, setMinute] = useState(minuteInit);
  let second = secondInit;

  const handleDecrementClick = () => {
    if (minute <= 0) {
      setMinute(60);
    } else {
      setMinute(minute - 1);
    }
    const nextMinute = minute - 1;
    onTimeChange(nextMinute);
  };
  const handleIncrementClick = () => {
    if (minute >= 60) {
      setMinute(0);
    } else {
      setMinute(minute + 1);
    }
    const nextMinute = minute + 1;
    onTimeChange(nextMinute);
  };

  return (
    <div>
      <div>
        {minute}:{second}
      </div>
      <button onClick={handleIncrementClick}>↑</button>
      <button onClick={handleDecrementClick}>↓</button>
    </div>
  );
};

export default SettingTimer;
