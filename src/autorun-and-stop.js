import {makeObservable, observable, computed, autorun} from 'mobx';

class OrderLine {
  price = 0;
  amount = 1;

  constructor(price) {
    makeObservable(this, {
      price: observable,
      amount: observable,
      total: computed,
    });
    this.price = price;
  }

  get total() {
    console.log('Computing...');
    return this.price * this.amount;
  }
}

const order = new OrderLine(0);

const stop = autorun(() => {
  console.log('autorun Total: ' + order.total);
});                         // autorun(f) 首次执行 f()
                            // 先输出 Computing... 再输出 autorun Total: 0

order.price = 1;            // autorun 再次执行 f()
                            // 先输出 Computing... 再输出 autorun Total: 1

stop();                     // 终止 autorun
order.price = 2;            // 虽然改变了 price 但是没有任何地方读取 total
                            // 这意味着 total() 不会执行，自然不会输出 Computing...

order.price = 3;            // 同上，不会输出 Computing...

console.log(order.total);   // 本行读取 total 此时执行 total()
                            // 输出 Computing... 再输出 3
                            // 不会输出 autorun Total 因为它已被终止
