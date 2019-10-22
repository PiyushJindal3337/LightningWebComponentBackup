public with sharing class accountDetails {
    public accountDetails() 
    {}
    @AuraEnabled(cacheable=true)
    public static List<SObject> getAccountList(String name)
    {
        if(name != null)
        {
            System.debug('in apex method getAccountList');
            String key = name+'%';
            String Query = 'select Id, Name, Phone from Account where Name Like :key'; 
            return Database.query(Query);   
        }
        return null;
    }
    @AuraEnabled(cacheable=true)
    public static List<SObject> getOpenCasesList()
    {
        System.debug('in apex method getOpenCasesList');
        String str = 'Closed';
        //String query = 'select CaseNumber, ContactId, AccountId, Priority, Origin from Case where status =:str'; 
        String caseQuery = 'select CaseNumber from Case where status =:str'; 
        return Database.query(caseQuery);    
    }
}
