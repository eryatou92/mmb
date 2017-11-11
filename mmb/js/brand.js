
$(function () {

    $.ajax({
        type:"get",
        url:mmp_api.brand,
        data:{
            brandtitleid:0
        },
        success:function (data) {
            console.log(data);
            // var html = template("tpl",data);
            // console.log(html);
            $(".rows ul").html( template("tpl",data) );
        }
    });

    $.ajax({
        type:"get",
        url:mmp_api.brandlist,
        data:{
            brandtitleid:0,
            pagesize:4
        },
        success:function (data) {
            console.log(data);
            // var html = template("tpl",data);
            // console.log(html);
            $(".pl ul").html( template("tpl2",data) );
        }
    });

    $.ajax({
        type:"get",
        url:mmp_api.brandcom,
        data:{
            productid:0
        },
        success:function (data) {
            console.log(data);
            // var html = template("tpl",data);
            // console.log(html);
            $(".bd ul").html( template("tpl3",data) );
        }
    });
});