import { LightningElement, track, wire } from 'lwc';
import id from '@salesforce/user/Id';
import mapDemo from '@salesforce/apex/UtilityClass.mapDemo';
import testName from '@salesforce/apex/UtilityClass.testName';
export default class HelloWorld extends LightningElement {
@track greeting ='World';
@track name = 'Piyush';
@track records;
@track error;
@track maps;
userId = id;
changeHandler(event){
    this.greeting = event.target.value;
}
handleClick(){
    this.name = 'Jindal';
    this.greeting = this.name;
}
@wire(testName)
wiredData(error, data){
    if(error)
    {
        this.error = error;
        /*eslint-disable no-console */
        console.log('records : '+this.records);
        
    }
    if(data)
    {
        this.records = data;        
        /*eslint-disable no-console */
        console.log('error : '+data);
    }
}
handleClick2(){
    mapDemo().then(result=>{
        console.log(result);
        const options =[]; //here we have created a map
        for(let key in result)// result is a map because it holds the returned parameter from "mapDemo()"
        {
            if(key)
            {
                options.push({
                    key : key,
                    value : result[key]
                })        
            }
        }
        console.log(options);
        this.maps = options;
    })
    .catch(error=>{
        this.error = error;
    });
}

}