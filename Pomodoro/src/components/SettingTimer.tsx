import { useState } from "react";
interface Props {
  minuteInit: number;
  secondInit: number;
}

const SettingTimer = ({ minuteInit, secondInit }: Props) => {
  const [minute, setMinute] = useState(minuteInit);
  const [second, setSecond] = useState(secondInit);

  const handleDecrementClick = () => {
    if (minute === 0) {
      setMinute(60);
    } else {
      setMinute(minute - 1);
    }
  };
  return (
    <div>
      <div contentEditable="true">
        {minute}:{second}
      </div>
      <button>↑</button>
      <button onClick={handleDecrementClick}>↓</button>
    </div>
  );
};

export default SettingTimer;
