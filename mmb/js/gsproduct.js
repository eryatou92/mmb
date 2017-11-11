$(function () {
    //渲染一级分类
    $.ajax({
        type:"get",
        url:mmp_api.gsproductshop,
        // data:{
        //     areaId:id
        // },
        success:function (data) {
            console.log(data);
            $(".hd ul").html( template("tpl",data) );
        }
    });

    // 渲染二级分类
function render(id ,cid) {

    $.ajax({
        type:"get",
        url:mmp_api.gsshoparea,
        // data:{
        //     shopId:id
        // },
        success:function (data) {
            console.log(data);
            var html = template("tpl2",data);
            // $("div ul").html( template("tpl2",data) );
            $("#"+cid).html(html);
        }
    });

}

    //给一级分类添加点击事件
    $(".hd").on("click","li",function () {
        // $(this).addClass("now").siblings().removeClass("now");
        var id = $(this).data("id");
        var cid = $(this).data("cid");
        render(id,cid);
    })

    $.ajax({
        type:"get",
        url:mmp_api.gsproduct,
        data:{
            shopid:0,
            areaid:0
        },
        success:function (data) {
            console.log(data);
            $(".inland-discount ul").html( template("tpl3",data) );

        }
    });


});



