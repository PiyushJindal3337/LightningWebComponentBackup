public with sharing class ContactAuraService {
public ContactAuraService() {

}
    @AuraEnabled(cacheable=true)
    public static List<SObject> getContactList(String name){
       
            String key = name+'%';
            String Query = 'select Id, Name, Email, Phone from Contact where Name Like :key'; 
            return Database.query(Query);
        
        
    }
    @AuraEnabled(cacheable=true)
    public static List<SObject> getAccountList(String name){
        
            String key = name+'%';
            String Query = 'select Id, Name, Phone from Account where Name Like :key'; 
            return Database.query(Query);

    }
}
