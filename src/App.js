import {useEffect, useState} from 'react';
import Timer from './Timer';

const TimerView = ({timer}) => {
  useEffect(() => {
    timer.start();
    return () => timer.stop();
  }, [timer]);
  return (
      <button
          onClick={() => timer.reset()}>已过秒数：{timer.secondsPassed}</button>
  );
};
export default function App() {
  const [timer, setTimer] = useState();
  return (
      <>
        <p>尽管控制台可以正确输出递增的秒数，但是以下按钮上的数字却并不会刷新</p>
        <TimerView timer={new Timer()}/>
        <TimerView timer={new Timer()}/>
      </>
  );
}
