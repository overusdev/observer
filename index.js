class Observer {
    constructor() {
        this._observers = [];
    }

    subscribe(cb) {
        this._observers.push(cb);
    }

    notify(data) {
        this._observers.forEach(subscriber => subscriber(data));
    }
}

const observ = new Observer();
const input = document.querySelector('.text');
const message = document.querySelector('.message');

const updateOutput = (newData) => {
  message.textContent = newData;
}

observ.subscribe(updateOutput);


input.addEventListener('keyup', function(){
   observ.notify(this.value);
});






