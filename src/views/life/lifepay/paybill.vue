<style lang="scss">
	.lipay{width:100%;
		 margin: 0 auto; 
		 padding: 0 0; 
		 background:#f4f4f4;
		 overflow-y:auto;
		 .lip-header{
			 padding:0 20px;
			 color:#474747;
			 font-size: 14px;
			 height:44px;
			 line-height: 44px;
		 }
		 .lip-ul{
		 	background:#fff;
		 	margin:0 auto;
		 	padding:0 0;
		 	border-top:1px solid #d3d3d3;
		 	border-bottom:1px solid #d3d3d3;
		 	>li{
		 		height:75px;
		 		margin-left: 20px;
		 		padding-right: 20px;
		 		border-bottom: 1px solid #d3d3d3;
		 		display: flex;
		 		display: -webkit-flex;
		 		flex-flow: row wrap;
		 		flex-wrap:nowrap;  
		 		.lip-left{
		 			width:30%; 
		 			align-self:center; 
		 			text-align: center;
		 			color:#808080; 
		 			.lip-up-p{
		 				line-height: 24px;
		 				font-size: 18px;
		 			}
		 			.lip-dow-p{
		 				line-height: 24px;
		 				font-size:14px;
		 			}
		 		}
		 		.lip-cont{
		 			width:30%;  
		 			align-self:center; 
		 			>i{
		 				background:url(../../../assets/images/components/qietu-25.png) no-repeat center center; background-size: 100% 100%;
       					width:30px;
       					height:30px; 
       					border-radius: 50%; 
       					display:block; 
       					margin:0 auto;
		 			} 
		 		}
		 		.lip-right{ 
		 			width:60%;
		 			align-self:center;
		 			line-height: 24px;
		 			.lip-top-p{
		 				font-size: 16px;
		 				color:#474747;
		 				>span{
		 					color:#fbb11c;
		 					float: right;
		 				}
		 			} 
		 			.lip-dw-p{
		 				font-size:14px;
		 				color:#808080;
		 				overflow:hidden;
		 				text-overflow:ellipsis;
		 				-o-text-overflow:ellipsis;
		 				white-space:nowrap;
		 			}
		 		}
		 	} 
		 }
		 .lip-bor-no{border:0 none !important;}
	}
</style>
<template>
	<div class="lipay">
		<div class="lip-header">
			本月
		</div>
		<ul class="lip-ul">
			<li>
				<div class="lip-left">
					<p class="lip-up-p">今天</p>
					<p class="lip-dow-p">14:39</p>
				</div>
				<div class="lip-cont">
					<i></i>
				</div>
				<div class="lip-right">
					<p class="lip-top-p">-139.60 <span></span></p>
					<p class="lip-dw-p">便捷缴电费方式，并且每一笔都可查</p>
				</div>
			</li>
			<li>
				<div class="lip-left">
					<p class="lip-up-p">今天</p>
					<p class="lip-dow-p">14:39</p>
				</div>
				<div class="lip-cont">
					<i></i>
				</div>
				<div class="lip-right">
					<p class="lip-top-p">-139.60 <span>缴费中</span></p>
					<p class="lip-dw-p">便捷缴电费方式，并且每一笔都可查</p>
				</div>
			</li>
			<li class="lip-bor-no">
				<div class="lip-left">
					<p class="lip-up-p">今天</p>
					<p class="lip-dow-p">14:39</p>
				</div>
				<div class="lip-cont">
					<i></i>
				</div>
				<div class="lip-right">
					<p class="lip-top-p">-139.60 <span>等待付款</span></p>
					<p class="lip-dw-p">便捷缴电费方式，并且每一笔都可查</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
 export default{

 }
</script>