define([
        "underscore",
        "backbone"
    ],
    function (_,Backbone) {
        var TextImg = Backbone.Model.extend({
            defaults:{
                src:"img/defalt_no_img.png",
                tittle:"请输入标题",
                date:"2016-8-10",
                time:"12：00",
                author:"作者名",
                article:"正文",
                type:"",
            }
        });
        return TextImg;
})
