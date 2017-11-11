$(function () {

    $.ajax({
        type:"get",
        url:mmp_api.bijiaproduct,
        data:{
            productid:0
        },
        success:function (data) {
            console.log(data);

            $(".p-bijia").html( template("tpl",data) );
            $(".logo").html( template("tpl2",data) );
        }
    })
});


$(function () {

    $.ajax({
        type:"get",
        url:mmp_api.bijiacom,
        data:{
            productid:0
        },
        success:function (data) {
            console.log(data);

            $(".bj-if").html( template("tpl3",data) );
        }
    })
});