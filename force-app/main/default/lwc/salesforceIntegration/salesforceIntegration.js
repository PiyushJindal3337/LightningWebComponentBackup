/*eslint-disable no-console*/
// we have created a class "accountZipCode" for getting 
// the zip code of the city of the account
import { LightningElement,track,api,wire } from 'lwc';
import wrapperWeatherData from '@salesforce/apex/WrapperWeather.wrapperWeatherData'
export default class SalesforceIntegration extends LightningElement {
    @api recordId;
    @track error;
    @track errorAcc;
    @track weatherDetails;
    //@track recDetails;
    @wire(wrapperWeatherData,{recId:'$recordId'})
    wiredMethod1({error,data}){
        if(data){
            this.weatherDetails=JSON.parse(data);
            //console.log('Weather Details->>',this.weatherDetails);
        }
        if(error){
            this.error=error;
        }
    }    
}