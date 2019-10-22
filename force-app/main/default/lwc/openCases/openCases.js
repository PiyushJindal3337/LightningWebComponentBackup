/*eslint-disable no-console*/
import { LightningElement, track } from 'lwc';
import getOpenCasesList from '@salesforce/apex/openCasesClass.getOpenCasesList';
export default class OpenCases extends LightningElement 
{
    @track caseError;
    @track cases;
    @track modalCaseId;
    @track openmodel;
    fetchOpenCases()
    {
        console.log('Inside fetchOpenCases');
        getOpenCasesList()
        .then( result => {
            if(result!=null){
                this.cases = result;
            //console.log('CaseList : '+this.cases);
            }
         
        })
        .catch( error => {
            this.caseError = error;
            //console.log(error);
        })
    }
    openmodal(event) 
    {
        this.openmodel = true;
        this.modalCaseId = event.target.id.substring(0,18);
        console.log(this.modalCaseId);
    }
    handleSuccess()
    {
        this.openmodel = false;
    }
}
