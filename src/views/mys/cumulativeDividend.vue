<template>
	<div class="body cumulativeDividend">	
        <div class="cumulativeDividend_head">
            <img src="../../assets/images/my/wenhao.png">
            <span>累计分红(元)</span>
            <h1>{{yue}}</h1>
        </div>
        <ul>
            <li v-for="item in list">
                <div :style="{width:width(item.yield_money)}">
                    <span>{{item.yield_time}}</span>
                    <span>{{item.yield_money}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
               yue:'0.00',
               list:[]
            }
        },
        mounted(){
            let _this=this;
            this.Fetch("getdailyyield",{uid:14}).fetchData().then(function  (d) {
                if(d.code==1000){
                   _this.yue=d.data.total;
                   _this.list=d.data.items;
                   for(let i=0;i<d.data.items.length;i++){
                        let newstr=d.data.items[i].yield_time.replace('-','.');
                        newstr=newstr.replace('-','.');
                        _this.list[i].yield_time=newstr;
                   }
                }
            });
            // $.ajax({
            //     type:'post',
            //     url:apipath+'getdailyyield',
            //     data:{uid:14},
            //     dataType:'json',
            //     success:function(d){
            //         if(d.code==1000){
            //            _this.yue=d.data.total;
            //            _this.list=d.data.items;
            //            for(let i=0;i<d.data.items.length;i++){
            //                 let newstr=d.data.items[i].yield_time.replace('-','.');
            //                 newstr=newstr.replace('-','.');
            //                 _this.list[i].yield_time=newstr;
            //            }
            //         }
            //     }
            // });
        },
        methods:{
        	width(w){
                 if (w > 5) {
                    return 35 + parseInt(w) > 100 ? 100 + '%' : 35 + parseInt(w) + '%';
                }else if (w < 5) {
                    return 40 + parseInt(w) > 100 ? 100 + '%' : 40 + parseInt(w) + '%';
                }
            }
        },
        
        components:{
            
        }
    }
</script>
<style lang="scss">
	.cumulativeDividend{
        width:100%;
        height:100%;
        background: #fafafa;
        ul{
            width:100%;
            padding:2.1rem 1.7rem;
            li{
                width:100%;
                height:3rem;
                background:white;
                margin-bottom:0.8rem;
                div{
                    height:100%;
                    display: flex;
                    align-items:center;
                    justify-content: space-between;
                    padding:0 0.8rem;
                    background:#ccc;
                    color: white;
                    font-size: 1.3rem;
                }
            }
            >li:first-child{
                div{
                    background:#ff585f;
                }
            }
        }
    }
    .cumulativeDividend_head{
        width:100%;
        padding-top:4rem;
        padding-bottom: 4rem;
        border-bottom: 1px solid #d3d3d3;
        text-align: center;
        position: relative;
        background: white;
        img{
            position: absolute;
            top:2rem;
            right: 1.4rem;
            width:2rem;
            height:2rem;
        }
        span{
            font-size: 1.6rem;
            color: #474747;
        }
        h1{
            font-size: 5rem;
            color: #474747;
        }
    }
</style>
