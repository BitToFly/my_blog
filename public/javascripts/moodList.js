let VM1= new Vue({
    el:" #showVue1",
    data:{
        arr:[],
        page:0,
        line:1
    },
    methods:{
        refresh:function () {
            this.$http.post('/moodList',{page:this.page,line:this.line } ).then(function (data) {
                console.log(data);
                this.page += this.line;
                this.arr.push(...data.body);
            })
        }
    },


    //下拉
    function () {
        this.refresh();
    },
    mounted:function() {
        var t = this;
        window.onscroll = function () {
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //变量scrollHeight是滚动条的总高度
            var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if (scrollTop + windowHeight === scrollHeight) {
                //写后台加载数据的函数
                t.refresh();
            }
        }
    }

});