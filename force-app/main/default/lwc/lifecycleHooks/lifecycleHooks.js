import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement 
{
    constructor()
    {
        super();
        /* eslint-disable*/
        alert('I am in constructor');
    }
    connectedCallback()
    {
        alert('In connected callback');
    }
    disconnectedCallback()
    {
        alert('In disconnected callback');
    }
    renderedCallback()
    {
        alert('In rendered callback');
    }
    errorCallback(error, stack)
    {
        alert('In errorcallback');
    }
}