import "./App.css";
// import Timer from "./components/Timer";
import SettingTimer from "./components/SettingTimer";
import { useState } from "react";
import Timer from "./components/Timer";
function App() {
  // Temperory hook

  const [workTimer, setWorkTimerHook] = useState(25);

  // Create Callback functions for each that set the variables and once the user
  // Enters Start, it will use these values :)

  const setWorkTimer = (time: number) => {
    setWorkTimerHook(time);
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
      <button onClick={() => setWorkTimerVisibility(true)}>
        Start Session
      </button>
    </>
  );
}

export default App;
