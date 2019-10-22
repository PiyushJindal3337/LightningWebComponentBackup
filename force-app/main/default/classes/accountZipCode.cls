public with sharing class accountZipCode {
    public accountZipCode() {}
    @AuraEnabled(Cacheable=true)
    public static String getZipCode(String accId){
        //String query ='select billingpostalcode from account where id=:accId';
        //Object obj= Database.query(query);
        //system.debug(obj);
        String zipcode =[select billingpostalcode from account where id=:accId][0].billingpostalcode;
        return zipcode;
    }
}
