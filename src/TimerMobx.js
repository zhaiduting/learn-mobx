import Timer from './Timer';
import {makeObservable, observable, action} from 'mobx';

export default class extends Timer {
  constructor(props) {
    super();
    makeObservable(this, {
      secondsPassed: observable,
      increase: action,
      reset: action,
    });
  }
}
