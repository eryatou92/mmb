$(function () {

    $.ajax({
        type:"get",
        url:mmp_api.inlanddiscount,
        success:function (data) {
            console.log(data);
            $(".inland-discount ul").html( template("tpl",data) );
        }
    });



});
