<style lang="scss">
.indes-box{
	width:100%;
	margin: 0 auto;
	padding: 0 0;
	background:#f4f4f4;
	overflow-y:auto; 
	font-family:"Microsoft YaHei",Lyh-Regular,helvetica,arial,sans-serif;
	.consol{
		width:100%;
		margin:0 auto;
		padding:0 0;
		.indup{
			width:90%;
			height:90px;
			background:#f00;
			margin:20px 5%;
			.indtime {
				width:100%;
				.indtime span{
				padding:2px 5px;
				display: inline-block;
				margin:0 auto;
				background:#dcdcdc;
				border-radius: 2px;
				color:#fff;
			}
			}
			
		}
	}
	.foots{
		width:100%;
		height:48px;
		background:#ffffff;
		border-top: 1px solid #d3d3d3;
		position: fixed;
		bottom:0;
		left:0;
		zoom:1;
		-ms-zoom: 1;
		z-index: 9999;
		>li{
			width:33.33%;
			font-size: 16px;
			color:#474747;
			text-align: center;
			line-height: 48px;
			float: left;
			background:#fff;
		}
		>li:first-child{
			border-right: 1px solid #d3d3d3;
			
		}
		>li:last-child{
			border-left: 1px solid #d3d3d3;
		}
		>li:hover{
			background:#e1e1e1;
		}
	}
}
</style>
<template>
	<div class="indes-box">
		<div class="consol">
			<div class="indup">
				<p class="indtime"><span>2014年3月3日</span></p>
				<p></p>
			</div>
		</div>
		<ul class="foots">
			<li>充值缴费</li>
			<li>我的</li>
			<li>服务中心</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		mounted(){
				// router.resolve(location, current?, append?)
				this.storeid = this.$route.params.storeid;
				console.log(this.storeid)
			}
		}

</script>