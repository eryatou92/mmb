$(function () {

    $.ajax({
        type:"get",
        url:mmp_api.coupon,
        success:function (data) {
            console.log(data);
            $(".coupon-title ul").html( template("tpl",data) );
        }
    });



});