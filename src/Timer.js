export default class Timer {
  secondsPassed = 0;
  id;

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    console.log('reset..');
    this.secondsPassed = 0;
  }

  start() {
    this.id = setInterval(() => {
      this.increase();
      console.log(`${this.id}号：`, this.secondsPassed);
    }, 1000);
  }

  stop() {
    clearInterval(this.id);
  }
}
