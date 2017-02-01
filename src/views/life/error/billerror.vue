<style lang="scss">
	.billerror{
		width: 100%;
		height:100%;
		margin: 0 auto;
		overflow-y:auto;
		padding: 0 0;
		background:#f4f4f4;
		font-family:"Microsoft YaHei",Lyh-Regular,helvetica,arial,sans-serif;
		.erheader{
			padding:0;
			height:36px;
			background:#fff;
			border-bottom:1px solid #d3d3d3; 
			.aleft{
				width:20%;
				height:100%;
				display:inline-block;
				line-height: 36px;
				font-size: 14px;
				text-indent: 25px;
				color:#484848;
				position: relative;
			}
			.aleft::before{
				width:15px;
				height:20px;
				display:inline-block;
				content:"";
				background:url(../../../assets/images/components/goback.png) no-repeat center center;
				background-size:100% 100%;
				position:absolute;
				top:8px;
				left:10px;
			}
			.erp{
				width:58%;
				text-align: center;
				font-size: 16px;
				line-height: 36px;
				display:inline-block;
				margin:0 auto;
			}
			.aright{
				width:20%;
				display:inline-block;
				line-height: 36px;
				float:right;
				font-size: 14px;
				color:#00b8a8;	
				text-align: center;
			}
		}
		.ercont{
			margin:0 auto;
			padding:0 0;
			.erimg{
				width:180px;
				height:195px;
				margin:89px auto 0px auto;
				background:#f5d6d6;
				overflow: hidden;
				>img{
					width:100%;
					height:100%;
					vertical-align:middle;
				}
			}
			.erh{
				font-size: 18px;
				line-height: 40px;
				color:#474747;
				width:100%;
				text-align: center;
			}
			.erpp{
				font-size: 14px;
				line-height: 20px;
				color:#474747;
				width:100%;
				text-align: center;
			}
		}
	}
</style>
<template>
	<div class="billerror">
		<div class="erheader">
			<a class="aleft" @click="goback">返回</a>
			<span class="erp">小鸡充电</span>
			<a class="aright" @click="chuang">{{city}}</a>
		</div>
		<div class="ercont">
			<div class="erimg">
				<img src="../../../assets/images/components/qietu-36.png"/>
			</div>
			<p class="erh">{{msg}}</p>
			<p class="erpp">或者您的账单未出，产生账单后提醒您</p>
		</div>
	</div>
</template>
<script>
import {LocationService} from '../../../libs/LocationService';
export default{
	data(){
		return{
			city:'',
			msg:''
		}
	},
	mounted(){
		let _this=this;
		_this.msg = _this.$route.params.msg;
		let location =new LocationService()
               location.getLocation().then(function(json){
                _this.city = location.city;
                // _this.mdify();
             });
	},
	methods:{
			goback:function(){
				this.$router.go(-1);
			},
			chuang:function(){
				let _this=this;
				 _this.$router.push({name:'city'});
			}

	}
}
</script>