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
    console.log("time set");
  };

  return (
    <>
      <SettingTimer
        minuteInit={25}
        secondInit={0}
        onTimeChange={setWorkTimer}
      ></SettingTimer>
      <Timer minute={workTimer}></Timer>
    </>
  );
}

export default App;
