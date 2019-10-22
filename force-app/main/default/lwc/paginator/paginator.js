import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement 
{
    handleNext()
    {
        // Create a custom event 
        const textMessage = 'This is test valuse of event in paginator.js';
        const nextEvent = new CustomEvent('next', {detail : textMessage});// Name of the event is "next"
        //Fire the event
        this.dispatchEvent(nextEvent);
    }
    handlePrev()
    {
        const prevEvent = new CustomEvent('prev');// Name of the event is "prev"
        this.dispatchEvent(prevEvent);
    }
}