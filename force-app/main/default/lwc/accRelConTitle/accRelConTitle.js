import { LightningElement, api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class AccRelConTitle extends NavigationMixin(LightningElement) 
{ 
    @api contactlist;

    handleSelect()
    {
        /*eslint-disable no-console*/
        console.log('Id of '+this.contactlist.Name+' is :'+this.contactlist.Id);
        console.log('Id',this.contactlist.Id);
        let pageReference = {
            type :'standard__recordPage',
            attributes :{
                            actionName : 'edit',
                            objectApiName : 'Contact',
                            recordId : this.contactlist.Id
                        }
        };
        this[NavigationMixin.Navigate](pageReference, true);
    }
}