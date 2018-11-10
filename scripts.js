let c = console.log;


function newConf(fecha1){
    c("fecha1 value: " + fecha1);
    $('#finalDate').datepicker({
        uiLibrary: 'bootstrap',
        maxDate: new Date(lastDate($("#initialDate").val())), //lastDate($("#initialDate").val())),  //'11/05/2018'
        minDate: new Date(fecha1)//fecha1) //'11/03/2018'
    });

    $('#finalDate').val(fecha1);
    
}

function lastDate(fecha) {

    c("Initial date: " + fecha);

     let num = parseInt(fecha.substring(3, 6));

     let dateSelected = new Date(fecha);

     let today = new Date();

     if(dateSelected.getMonth() == today.getMonth()){

        (dateSelected.getDate() + 2) > today.getDate() ? dateSelected.setDate(today.getDate()) : dateSelected.setDate(num + 2);

     } else if(dateSelected.getMonth() < today.getMonth()) {
        dateSelected.setDate(num + 2);
     }

     let finalDate = (dateSelected.getMonth() + 1) + "/" + dateSelected.getDate() + "/" + dateSelected.getFullYear();

     c("Final date: " + finalDate);

     $("#finalDate").val(finalDate);

     return finalDate;
}

$(document).ready(function () {
    
    $('#initialDate').datepicker({
            uiLibrary: 'bootstrap'
    });

    newConf($('#initialDate').val()); 
        
});

    function hacer(obj){
        $('#finalDate').datepicker("destroy");
        newConf($(obj).val());
       // 
    }

////