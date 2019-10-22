/* eslint-disable no-console */
import { LightningElement, api, wire, track } from 'lwc';
import getAccRelContacts from '@salesforce/apex/accountRelContacts.getAccRelContacts';
import conAccId_field from '@salesforce/schema/Contact.AccountId';
import conName_field from '@salesforce/schema/Contact.Name';
import conPhone_field from '@salesforce/schema/Contact.Phone';
import conEmail_field from '@salesforce/schema/Contact.Email';
//import { NavigationMixin } from 'lightning/navigation';
export default class AccountRelContacts extends LightningElement
{
    @api recordId;
    @track conError;
    @track contactList;
    @track modalConId;
    fields = [conAccId_field, conName_field, conPhone_field, conEmail_field];

    @track openmodel = false;
    openmodal(event) {
        this.openmodel = true;
        this.modalConId = event.target.id.substring(0,18);
        console.log(this.modalConId);
    }
    closeModal() {
        this.openmodel = false;
    } 

    saveMethod() {
        //alert('save method invoked');
        this.closeModal();
    }

    handleSuccess()
    {
        this.openmodel = false;
    }


    @wire(getAccRelContacts,{accountId : '$recordId'}) 
    wiredMethod({error, data})
    {
        if(data)
        {
            this.contactList = data;
            /*eslint-disable no-console*/
            console.log('contactList : ', this.contactList);
            //console.log('Data : ', data);
        }
        if(error)
        {
            this.conError = error;
            /*eslint-disable no-console*/
            //console.log('Error : ', error);
            console.log('ConError : ', this.conError);
        }
    }
   /* fetchAllContacts()
    {   
        let pageReference = {
            type :'Standard__RecordPage',
            attributes :{
                            actionName : 'edit',
                            objectApiName : 'Contact'
                        }
        }
        this[NavigationMixin.Navigate](pageReference, true)
    }*/

}