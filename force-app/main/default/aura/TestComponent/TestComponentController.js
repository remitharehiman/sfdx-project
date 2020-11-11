({
    Meth1 : function(component, event, helper) {
        var action = component.get("c. DoSomething");
        action.setCallback(this,function(res){
            var state = res.getState();
            if(state=="SUCCESS"){
                alert(res.getReturnValue());
            }else if (state=="ERROR"){
                alert(res.getError());
            }

        });
        $A.enqueueAction(action);

    }
})
