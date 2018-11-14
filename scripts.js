let c = console.log;

let limitDay = 2;


function newConf(fecha1) {
    $('#finalDate').datepicker({
        format: 'yyyy-mm-dd',
        uiLibrary: 'bootstrap',
        maxDate: new Date(lastDate($("#initialDate").val(),limitDay-1).replace(/-/g, '\/')), //lastDate($("#initialDate").val())),  //'11/05/2018'
        minDate: new Date(fecha1.replace(/-/g, '\/')) //fecha1) //'11/03/2018'
    });

    $('#finalDate').val(fecha1);

}

function lastDate(fecha,limit) {
    
    let pDate = new Date(fecha.replace(/-/g, '\/'));

    let num = pDate.getDate();

    let dateSelected = new Date(fecha.replace(/-/g, '\/'));

    let today = new Date();

    if (dateSelected.getMonth() == today.getMonth()) {

        (dateSelected.getDate() + limit) > today.getDate() ? dateSelected.setDate(today.getDate()) : dateSelected.setDate(num + limit);

    } else if (dateSelected.getMonth() < today.getMonth()) {
        dateSelected.setDate(num + limit);
    }

    let finalDate = dateSelected.getFullYear() + "-" + (dateSelected.getMonth() + 1) + "-" + dateSelected.getDate();

    $("#finalDate").val(finalDate);

    return finalDate;
}

$(document).ready(function () {

    $('#initialDate').datepicker({
        format: 'yyyy-mm-dd',
        uiLibrary: 'bootstrap',
        maxDate: new Date()
    });

    newConf($('#initialDate').val());

});

function hacer(obj) {
    $('#finalDate').datepicker("destroy");
    newConf($(obj).val());
    // 
}

////
