import "./App.css";
import Timer from "./components/Timer";
import SettingTimer from "./components/SettingTimer";

function App() {
  return (
    <>
      <Timer minute={25} seconds={0}></Timer>
      <SettingTimer minuteInit={25} secondInit={0}></SettingTimer>
    </>
  );
}

export default App;
