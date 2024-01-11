import "./App.css";
// import Timer from "./components/Timer";
import SettingTimer from "./components/SettingTimer";
import { useState } from "react";
import Timer from "./components/Timer";
function App() {
  // Temperory hook

  const [workTimer, setWorkTimerHook] = useState(25);
  const [breakTimer, setBreakTimerHook] = useState(25);
  // Create Callback functions for each that set the variables and once the user
  // Enters Start, it will use these values :)

  const setWorkTimer = (time: number) => {
    setWorkTimerHook(time);
  };
  const setBreakTimer = (time: number) => {
    setBreakTimerHook(time);
  };

  const [workTimerVisibility, setWorkTimerVisibility] = useState(false);

  return (
    <>
      <div>{workTimerVisibility && <Timer minute={workTimer}></Timer>}</div>
      <SettingTimer
        timerNameInit="Work Timer"
        minuteInit={25}
        secondInit={0}
        onTimeChange={setWorkTimer}
      ></SettingTimer>
      <SettingTimer
        timerNameInit="Break Timer"
        minuteInit={5}
        secondInit={0}
        onTimeChange={setBreakTimer}
      ></SettingTimer>

      <button onClick={() => setWorkTimerVisibility(true)}>
        Start Session
      </button>
    </>
  );
}

export default App;
