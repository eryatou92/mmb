$(function () {

    //标题栏
    $.ajax({
        type:"get",
        url:mmp_api.couponproduct,
        data:{
            couponid:0
        },
        success:function (data) {
            console.log(data);
            var html = template("tmp",data);
            // console.log(html);
            $(".product ul").html( template("tmp",data) );
        }

    });



});


