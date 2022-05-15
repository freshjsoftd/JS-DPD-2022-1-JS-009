class Observer{
  constructor(){
    this.subscribers = [];
  }

  subscribe(subscriber){
    this.subscribers.push(subscriber);
  }

  broadcast(message){
    this.subscribers.forEach(subscriber => {
      subscriber.innerText = message;
    })
  }
  deleteSub(id){
    this.subscribers.filter(subscriber => subscriber.subsId !== id);
  }
}

class SubsAddContr{
  constructor(observer){
    this.observer = observer;
  }

  addNewSubscruber(){
    const observer = this.observer;
    function addSubscriber(){
      const subscriber = document.createElement('div');
      subscriber.className = 'subscriber';
      document.body.appendChild(subscriber);
      observer.subscribe(subscriber);
      console.log(observer.subscribers);
    }
    const button = document.querySelector('#add');
    button.addEventListener('click', addSubscriber);
  }
}

class NotificationContr{
  constructor(observer){
    this.observer = observer;
  }

  notifyAll(){
    const observer = this.observer;
    const input = document.querySelector('input[type=text]');
    function notify(){
      observer.broadcast(input.value)
    }
    input.addEventListener('input', notify)
  }
}

const observer = new Observer();
const subsContr = new SubsAddContr(observer);
const notifyContr = new NotificationContr(observer);
subsContr.addNewSubscruber();
notifyContr.notifyAll();
