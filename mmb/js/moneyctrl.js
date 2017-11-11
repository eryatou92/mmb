$(function () {

    $.ajax({
        type:"get",
        url:mmp_api.discount,
        data:{
            pageid:0
        },
        success:function (data) {
            console.log(data);
            var html = template("tpl2",data);
            // console.log(html);
            $(".money-ctrl ul").html( template("tpl2",data) );
        }
    });



});