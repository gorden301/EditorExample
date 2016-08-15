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
        initTiny();
        $('#preview').on('click',function(){
            bootbox.alert({
                title:'预览',
                message:$('.main_editor').html()
            });
        });
    });
