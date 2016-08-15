function initTiny() {
    tinymce.init({
        selector: "#textdir",
        menu: {
            view: {title: 'Edit', items: 'cut,copy,paste'}
        },
        toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | code',
        height: 300,
        statusbar: false,
        plugins: 'code'
    })
}
var timer;
function changetext(obj){
    clearInterval(timer);
    timer = null;
    initTiny();
    if(!tinyMCE.activeEditor) return;
    tinyMCE.activeEditor.setContent(obj.find(".text-align-center").html());

    timer = setInterval(function(){
        var temp = tinyMCE.activeEditor.getContent();
        obj.find(".text-align-center").html(temp);
    },10);
}