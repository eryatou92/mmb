$(function () {

    $.ajax({
        type:"get",
        url:mmp_api.discountpro,
        data:{
            productid:0
        },
        success:function (data) {
            console.log(data);
            
            // console.log(html);
            $(".details").html( template("tpl",data) );
        }
    });

});