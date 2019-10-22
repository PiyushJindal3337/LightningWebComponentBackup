import { LightningElement, api } from 'lwc';
import testLabel from '@salesforce/label/c.testLabel';
import testResource from '@salesforce/resourceUrl/testResource';
import userId from '@salesforce/user/Id';
import accountObject from '@salesforce/schema/Account';
import name_fieldAcc from '@salesforce/schema/Account.Name';
export default class DesignLwcDemo extends LightningElement 
{
    @api greeting;
    @api heading;
    @api message;
    @api label = {
        testLabel,
        testResource,
        userId,
        accountObject,
        name_fieldAcc
    }
}