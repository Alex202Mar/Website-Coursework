// Saves what the user enters to local storage//
console.log("start log");

    $("#btnSaveToLocalStorage").click(function () {
        console.log("inside btnSaveToLocalStorage Click function");
        SaveToLocalStorage();
    });

    function SaveToLocalStorage(){
        console.log("inside SaveToLocalStorage function");
        var txtboxFooValue = $("#txtboxFooExampleLocalStorage").val();
        console.log("text box Foo value  = ", txtboxFooValue);
        localStorage.setItem('LocalStorageKey', txtboxFooValue);
        console.log(" after setItem in LocalStorage");
        RetrieveFromLocalStorage();
    }
//Retrieves what is stored and displays it//
    function RetrieveFromLocalStorage() {
        console.log("inside Retrieve from LocalStorage");
        var retrivedValue = 'None';
        var retrivedValue = localStorage.getItem('LocalStorageKey', retrivedValue);
        $("#divDataLocalStorage").text(retrivedValue);
        console.log("inside end of retrieve from localstorge");
        console.log("retrieved value = ", retrivedValue);
    }