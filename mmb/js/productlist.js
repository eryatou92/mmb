
$(function () {

    $.ajax({
        type:"get",
        url:mmp_api.productlist,
        data:{
            categoryid:0
        },
        success:function (data) {
            console.log(data);
            // var html = template("tpl",data);
            // console.log(html);
            $(".product ul").html( template("tpl",data) );
        }
    });
    
});