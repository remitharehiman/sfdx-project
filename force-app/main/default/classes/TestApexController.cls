public with sharing class TestApexController {
    @AuraEnabled
    public static string DoSomething(){
        try {
            return('I am from Apex Controller');
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    public TestApexController() {

    }
}
