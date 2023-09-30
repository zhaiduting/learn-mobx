import Timer from './Timer';
import {makeObservable, observable, action} from 'mobx';

export class TimerMobx extends Timer {
  constructor(props) {
    super();
    makeObservable(this, {
      secondsPassed: observable,
    });
  }
}
