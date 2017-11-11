$(function () {

    //标题栏
    $.ajax({
        type:"get",
        url:mmp_api.title,
        success:function (data) {
            console.log(data);
            var html = template("tmp1",data);
            // console.log(html);
            $(".bcj-head ul").html( template("tmp1",data) );
        }

    });

    //白菜价商品页
    $.ajax({
        type:"get",
        url:mmp_api.product,
        data:{
            titleid:0
        },
        success:function (data) {
            console.log(data);
            var html = template("tmp2",data);
            // console.log(html);
            $(".bcj-list ul").html( template("tmp2",data) );
        }

    })

});


