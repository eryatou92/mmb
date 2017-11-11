$(function () {

    $.ajax({
        type:"get",
        url:mmp_api.moneyctrl,
        data:{
            productid:20
        },
        success:function (data) {
            console.log(data);

            // console.log(html);
            $(".details").html( template("tpl",data) );
            // $(".comment").html( template("tpl2",data) );
        }
    });

});