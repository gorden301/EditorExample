require.config({
    shim:{
      underscore:{
          exports:"_"
      },
      backbone:{
          deps:["underscore","jquery"],
          exports:"Backbone"
      },
      backboneLocalstorage:{
            deps:["backbone"],
            exports:"Store"
        },
        bootbox:{
            deps:["jquery","bootstrap"],
        },
        bootstrap:{
            deps:["jquery"],
        }
    },
    paths:{
        jquery:"libs/jquery-1.9.1.min",
        underscore:"libs/underscore-1.6",
        backbone:"libs/backbone-min-0.9.10",
        text:"libs/text",
        backboneLocalstorage:"libs/backbone-localstorage",
        bootstrap:"libs/bootstrap",
        bootbox:"libs/bootbox.min"
    }
});

require(["jquery","underscore","backbone","bootbox","module/textimg","collection/textimgs","view/textimg","view/app"],
    function ($,_,Backbone,bot,textimg,textimgs,TextImgView,app) {
        var _model = new Backbone.Model();
        var App = new app(
            {
                model:_model
            }
        );
        $(function(){
            initTiny();

            var getstore = JSON.parse(window.localStorage?localStorage.getItem("store"):Cookie.read("store"));
            if(getstore) {
                for (var i = 0; i < getstore.length; i++) {
                    var model = new textimg(getstore[i]);
                    list.add(model);

                }
            }

            $(".second").on("click",function () {
                var articlemodel = new textimg({type:"txt"});
                list.add(articlemodel);
            });

            $(".third").on("click",function () {
                var imgemodel = new textimg({type:"img"});
                list.add(imgemodel);
            })

            $('#preview').on('click',function (){
                bootbox.alert({
                    title:'预览',
                    message:$('.main_editor').html()
                });
            });
            $("#savelocal").on("click",function () {
                var source = JSON.stringify(list);
                if(window.localStorage){
                    localStorage.removeItem("store");
                    localStorage.setItem("store",source);
                }
                else{
                    Cookie.write("store",source);
                }
            })
        })

    });
