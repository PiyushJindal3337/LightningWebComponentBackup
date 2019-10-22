import { LightningElement, wire, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactAuraService.getContactList';
import getAccountList from '@salesforce/apex/ContactAuraService.getAccountList';
export default class ContactListDemo extends LightningElement 
{
    @track searchKey;
    @track searchKeyAcc;
    //@wire(getContactList) contacts;

    //for checking errors while using "wire" decorator we can use
    @track accounts;
    @track accountError;
    @track contacts;
    @track error;
    @track selectAccount;
    @wire(getContactList, {name : '$searchKey'} )
    wiredContact({error, data}){
        if(data){
                this.contacts = data;    
        }
        if(error)
        {
            this.error = error;
            /*eslint-disable no-console*/
            console.log('Error : '+error);
        }
    }
/*    @wire(getAccountList, {name : '$searchKey'} )
    wiredAccount({error, data}){
        if(data){
                this.accounts = data;    
        }
        if(error)
        {
            this.error = error;
            /*eslint-disable no-console*/
/*            console.log('Error : '+error);
        }
    }*/
    //But now in .html file we will not use {contacts.data}
    //but we will write the variable in which we storing the data which is contacts (line no. 10)
     
    handleChange(event)
    {
        event.preventDefault();
        /*eslint-disable no-console*/
        console.log('Value : '+event.target.value);
        console.log(this.contacts);
        this.searchKey = event.target.value;
    }
    handleChangeAccount(event)
    {
        event.preventDefault();
        /*eslint-disable no-console*/
        console.log(event.target.value);
        //console.log('Value : '+event.target.value);
        //console.log(this.contacts);
        this.searchKeyAcc = event.target.value;
    }
    findAccount()
    {
        /*eslint-disable no-console*/
        console.log(this.searchKeyAcc);
        getAccountList({name : this.searchKeyAcc})
        .then(result =>{
            /*eslint-disable no-console*/
            console.log('result : '+result);
            this.accounts = result;
        })
        .catch(error =>{
            this.accountError = error;
        });
    }
    handleSelectRec(event)// this method brings the value from accountTitle throught an event "select" by using onselect={handleAccountRec}
    {
        const recordId = event.detail;
        /*eslint-disable no-console*/
        console.log('record id : ',recordId);
        this.selectAccount = this.accounts.find(account => account.Id === recordId);

        //or for loop we can use "for" loop

        /*for(let i = 0; i<this.accounts.length; i++)
        {
            if(this.accounts[i].Id === recordId)
            {
                this.selectAccount = this.accounts[i];
            }
        }*/
    }
}