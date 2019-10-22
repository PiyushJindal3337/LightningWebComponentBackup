import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/accountDetails.getAccountList'
import getOpenCasesList from '@salesforce/apex/accountDetails.getOpenCasesList'

//import { NavigationMixin } from 'lightning/navigation'
export default class AccountDetails extends LightningElement 
{
    @track searchKeyAcc;
    @track accounts;
    @track accountError;
    @track accId;
    @track selectAccount;
    @track cases;
    @track caseError;
    handleChangeAccount(event)
    {
        event.preventDefault();
        /*eslint-disable no-console*/
        console.log(event.target.value);
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
   /* fetchAccountDetails()
    {
        this[NavigationMixin.navigate](
            {
                type : 'standard__recordPage',
                attributes :{
                                actionName : 'view',
                                objectApiName : 'Account',
                                recordId : this.accId
                            }
            },
            true);
    }*/
    fetchOpenCases()
    {
        /* eslint-disable no-console */
        console.log('Inside fetchOpenCases');
        getOpenCasesList()
        .then( result => {
            if(result!=null){
                this.cases = result;
            /*eslint-disable no-console*/
            //console.log(result);
            //console.log('result',result);
            console.log('CaseList : '+this.cases);
            }
            //this.caseList = result;
            /*eslint-disable no-console*/
            //console.log('result',result);
            //console.log('CaseList : '+this.caseList);
        })
        .catch( error => {
            this.caseError = error;
            /*eslint-disable no-console*/
            console.log(this.caseError);
            console.log(error);
        })
    }
}