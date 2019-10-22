/*eslint-disable no-console */
public with sharing class WrapperWeather {
    public WrapperWeather() {}

    public static  String tempMin;
    public static String tempMax;
    public static string deg;
    public static string speed;
    
    @AuraEnabled(Cacheable=true)
    public static List<weatherData> wrapperWeatherData(String recId)
    {
        String zipcode =[select billingpostalcode from account where id=:recId][0].billingpostalcode;
        //return zipcode;
        List<weatherData> listweatherData = new List<weatherData>();
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        //String zipcode='94040';

        request.setEndpoint('https://api.openweathermap.org/data/2.5/forecast?zip='+zipcode+'&appid=de8307594623ad90c4b1d7bf062b8f49&cnt=8');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        
        JSONParser parser = JSON.createParser(response.getBody());
        while(parser.nextToken()!=null)
        {
            
            //system.debug('Parser-->>>>>'+parser.getText());
            if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) && (parser.getText() == 'temp_min')) 
            {
                // Get the value.
                parser.nextToken();
                tempMin = parser.getText();
                system.debug('value for Temp_min'+parser.getText());
                
            }
            if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) && (parser.getText() == 'temp_max')) 
            {
                // Get the value.
                parser.nextToken(); 
                tempMax = parser.getText();
                //system.debug('value for Temp_max'+parser.getText());
                
            }
            if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) && (parser.getText() == 'deg')) 
            {
                // Get the value.
                parser.nextToken();
                deg = parser.getText();
                //system.debug('value for deg'+parser.getText());
                
            }
            if ((parser.getCurrentToken() == JSONToken.FIELD_NAME) && (parser.getText() == 'speed')) 
            {
                // Get the value.
                parser.nextToken();
                speed = parser.getText();
                //system.debug('value for speed'+parser.getText());
                
            }
            if(tempMin!=null && tempMax!=null && deg!=null && speed!=null)
            {
                listweatherData.add(new weatherData(tempMin, tempMax, deg, speed));
                tempMin=null;
                tempMax=null;
                deg=null;
                speed=null;
            }
        }
        system.debug('listweatherData-->>'+listweatherData);
        return Json.serialize(listweatherData);
        
    }
    public class weatherData
    {
        public String tempMin;
        public String tempMax;
        public string deg;
        public string speed;
        
        public weatherData(string s1, string s2, string s3, string s4){
            this.tempMin=s1;
            this.tempMax=s2;
            this.deg=s3;
            this.speed=s4;
        }
    }
}
