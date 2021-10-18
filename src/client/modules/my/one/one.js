// helloConditionalRendering.js
import { LightningElement } from 'lwc';

export default class one extends LightningElement {
    
    isbuttonclicked=false;
    myFunction(event){
        this.isbuttonclicked = event.target.click; 
        
    }

}