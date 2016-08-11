define([
        "underscore",
        "backbone"
    ],
    function (_,Backbone) {
        var TextImg = Backbone.Model.extend({
            defaults:{
                src:"",
                tittle:"请输入标题",
                date:"2016-8-10",
                time:"12：00",
                author:"作者名",
                article:"正文",
            }
        });
        return TextImg;
})
