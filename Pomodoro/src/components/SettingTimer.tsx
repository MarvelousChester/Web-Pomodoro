interface Props {
  minuteInit: number;
  secondInit: number;
}

const SettingTimer = ({ minuteInit, secondInit }: Props) => {
  let minute = minuteInit;
  let second = secondInit;

  return (
    <div>
      <div contentEditable="true">
        {minute}:{second}
      </div>
      <button>↑</button>
      <button>↓</button>
    </div>
  );
};

export default SettingTimer;
