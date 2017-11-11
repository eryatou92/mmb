$(function () {
   
    $.ajax({
        type:"get",
        url:mmp_api.brandtitle,
        success:function (data) {
            console.log(data);
            
            $(".rows ul").html( template("tpl",data) );
        }
    })
});
