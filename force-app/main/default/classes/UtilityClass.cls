public with sharing class UtilityClass {
    public UtilityClass() {

    }
    @AuraEnabled(cacheable=true)
    public static Map<String, String> mapDemo(){
        Map<String, String> testMap = new Map<String, String>();
        testMap.put('1','piyush1');
        testMap.put('2','piyush2');
        testMap.put('3','piyush3');
        testMap.put('4','piyush4');
        return testMap;
    }
    @AuraEnabled
    public static string testName(){
        return 'Test String';
        
    }
}
