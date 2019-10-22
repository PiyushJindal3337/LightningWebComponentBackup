public with sharing class openCasesClass {
    public openCasesClass() {

    }
    @AuraEnabled(cacheable=true)
    public static List<SObject> getOpenCasesList()
    {
        //System.debug('in apex method getOpenCasesList');
        String str = 'Closed';
        //String query = 'select CaseNumber, ContactId, AccountId, Priority, Origin from Case where status =:str'; 
        String caseQuery = 'select id, CaseNumber, Status, AccountId, ContactId, ContactEmail, CreatedDate from Case where status =:str'; 
        return Database.query(caseQuery);    
    }
}
