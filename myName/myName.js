import { LightningElement,track } from 'lwc';

export default class MyName extends LightningElement {
@track FirstName;
@track LastName;

constructor(){
super();
console.log('Constructor called')
}

connectedCallback(){
console.log('ConnectedCallback called')
}

renderedCallback(){
console.log('rendered Callback called =>');
console.log('Name=>' + this.FirstName);
console.log('Name=>' + this.LastName);
}

disconnectedCallback(){
console.log('disconnected callback called')
}

handleSubmit(){
this.FirstName=this.template.querySelector('lightning-input').value;
//this.LastName=this.template.querySelector('lightning-input').value;
}

handleInput(event){
//this.name=event.target.value;
}
}