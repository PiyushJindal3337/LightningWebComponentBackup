public with sharing class accountRelContacts {
    public accountRelContacts() {

    }
    @AuraEnabled(cacheable=true)
    public static List<SObject> getAccRelContacts(String accountId)
    {
        String str = 'select id, Name, Phone, Email from Contact where AccountId =:accountId';
        return Database.query(str);
    }
}
