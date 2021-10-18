// helloConditionalRendering.js
import { LightningElement } from 'lwc';

export default class one extends LightningElement {
    
    isbuttonclicked=false;
    handleChange(event){
        this.isbuttonclicked = event.target.onclick();{
        isbuttonclicked=true;
        }
    }

}