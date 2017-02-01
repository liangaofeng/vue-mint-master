<style lang="scss">
.unitbox{
	width:100%;
	height:100%;
	background:#f4f4f4;
	overflow-y:auto;
	margin: 0 auto;
	padding:0 0; 
	font-family: "Microsoft YaHei",Lyh-Regular,helvetica,arial,sans-serif;
	.untop{
		width:100%;
		height:45px;
		overflow:hidden;
		margin:0 auto;
		padding:0 0;
	}
	// .mint-searchbar{background:#808080 !important;}
	// .mint-searchbar-text{padding-left:10px;}
	// .mint-searchbar-core{text-indent: 5px;}
	// .mint-searchbar-cancel{color:#fff !important;}
	ul{
		width:100%;
		margin:10px auto;
		padding:0 0;
		border-top:1px solid #d3d3d3;
		border-bottom: 1px solid #d3d3d3;
		li{
			height:56px;
			background:#fff;
			line-height: 56px;
			color:#474747;
			font-size: 15px;
			
			.uncot{
				height:100%;
				margin:0 0 0 20px;
				border-bottom: 1px solid #d3d3d3;
			}
			.shows{
				background:url(../../../assets/images/components/qietu_ios-28.png) no-repeat center center;
				background-size:100% 100%;
				width:25px;
				display:inline-block;
				height:25px;
				margin-top: 14px;
    			margin-right: 40px;
    			float:right;
			}
		}
		li:last-child .uncot{
			border-bottom: none;
		}
	}
}
</style>
<template>
<div class="unitbox">
	<ul>
		<li v-for="(itm , index) in itms" @click="moves(index)">
			<div class="uncot">
				<span>{{itm.payunitname}}</span>
				<i :class="{'shows':index==active}"></i>
			</div>
		</li>
	</ul>
</div>
</template>
<script>
export default{
	data(){
		return{
			city_id:'',
			parent_id:'',
			itms:[],
			active:'',
		}
	},
	mounted(){
		let _this=this;
		_this.active = _this.$route.params.nuber;
		console.log(_this.active+"rr2ee")
		_this.city_id = sessionStorage.cityId;
		_this.parent_id = sessionStorage.provinceId;
		if(sessionStorage.cityId && sessionStorage.provinceId){
			_this.lists();
		}
	},
	methods:{
		lists:function(){
			let _this = this;
			_this.Fetch("payunitname", {
                    provid: _this.parent_id,
                    cityId: _this.city_id
                }).fetchData().then(function(json) {
                    if(json.code==1000){
                    	_this.itms = json.data.items;
                    }
                    
                });
		},
		moves:function(e){
			let _this=this;
			_this.active=e;
			localStorage.electricity=_this.active;
			this.$router.go(-1);
		}
	}
}
</script>