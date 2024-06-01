import { LightningElement, api, wire } from 'lwc';

export default class HelloWorld extends LightningElement {

@api greetings;


handleInputChange(event){
    this.greetings = event.target.value;
}


}