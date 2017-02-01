<style lang="scss">
.indes-box{
	width:100%;
	overflow-y:auto;
	height:100%;
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
			width:95%;
			margin:20px 2.5%;
			.indtime {
				width:100%;
				margin-bottom: 10px;
				span{
				padding:5px 7px;
				display: table;
				margin:0 auto;
				background:#cdcdcd;
				border-radius: 5px;
				color:#fff;
				font-size:8px;
				}
			}
			.indtext{
				width:100%;
				.logos{
					width:50px;
					height:50px;
					background:#f0cecd;
					overflow:hidden;
					display:inline-table;
					img{
						width:100%;
						height:100%;
						vertical-align: middle;
					}
				}
				.indps{
					display:inline-block;
					padding:5px 10px;
					font-size: 16px;
					color:#474747;
					border:1px solid #d3d3d3;
					background:#fff;
					border-radius: 5px;
					margin-left: 20px;
					position:relative;
				}
				.indps::before{
					content:'';
					display:blcok;
					background:#fff;
					width:10px;
					height:10px;
					border-bottom: 1px solid #dcdcdc;
					border-left: 1px solid #dcdcdc;
					transform:rotate(45deg);
					-ms-transform:rotate(45deg); 	/* IE 9 */
					-moz-transform:rotate(45deg); 	/* Firefox */
					-webkit-transform:rotate(45deg); /* Safari 和 Chrome */
					-o-transform:rotate(45deg); 	/* Opera */
					position:absolute;
					top:10px;
					left:-5px;
				}
			}
		}
		.indens{
			width:90%;
			margin:60px 5%;
			.indtime {
				width:100%;
				margin-bottom: 10px;
				span{
				padding:5px 7px;
				display: table;
				margin:0 auto;
				background:#cdcdcd;
				border-radius: 5px;
				color:#fff;
				font-size:8px;
				}
			}
			.inddais{
				border-radius: 5px;
				background:#fff;
				border:1px solid #dcdcdc;
				.indtops{
					font-size: 18px;
					padding-top: 10px;
					color:#fbb019;
					padding-left:10px;
				}
				.indops{
					font-size: 16px;
					color:#808080;
					padding-left: 10px;
					padding-top: 5px;
				}
				.indmeny{
					width:95%;
					margin:0px auto 10px auto;
					border-bottom: 1px solid #dcdcdc;
					font-size: 30px;
					color:#474747;
					text-align: center;
					padding:20px 0;
					span{
						font-size: 16px;
						padding-left: 5px;
						color:#808080;
					}
				}
				.inddow{
					width:95%;
					margin:10px auto 10px auto;
					border-bottom: 1px solid #dcdcdc;
					p{
						font-size:16px;
						line-height: 30px;
						color:#808080;
					}
					.indfoot{
						padding-bottom: 10px;
					}
				}
				.infet{
					width:95%;
					margin:10px auto 10px auto;
					display:block;
					font-size:16px;
					color:#808080;
					i{
						width:10px;
						height:18px;
						display:inline-block;
						float: right;
						background:url(../../../assets/images/components/go_icon.png) no-repeat center center;
						background-size:100% 100%;
					}
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
 <div class="page-loadmore-wrapper indes-box" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
       <div class="consol"  >
			<div class="indup">
				<p class="indtime"><span>2014年3月3日  17:35</span></p>
				<div class="indtext">
					<p class="logos"><img src="../../../assets/images/my/LOGO.png"></p>
					<span class="indps">欢迎光临小鸡充电！</span>
				</div>
			</div>
			<div class="indens" v-for="item in list">
				<p class="indtime"><span>{{item.time}}</span></p>
				<div class="inddais">
					<p class="indtops">等待付款</p>
					<p class="indops">12月19日</p>
					<p class="indmeny">110.0<span>元</span></p>
					<div class="inddow">
						<p>缴费单位：上海电力公司</p>
						<p>电费户号：6867777777777</p>
						<p class="indfoot">住址信息：莲前**护航路33号</p>
					</div>
					<a class="infet">查看详情<i></i></a>
				</div>
			</div>
			<!-- <div class="indens">
				<p class="indtime"><span>2014年3月3日  17:35</span></p>
				<div class="inddais">
					<p class="indtops">等待付款</p>
					<p class="indops">12月19日</p>
					<p class="indmeny">110.0<span>元</span></p>
					<div class="inddow">
						<p>缴费单位：上海电力公司</p>
						<p>电费户号：6867777777777</p>
						<p class="indfoot">住址信息：莲前**护航路33号</p>
					</div>
					<a class="infet">查看详情<i></i></a>
				</div>
			</div> -->	
		</div>
		  <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span style="display: inline-flex" v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
      	<ul class="foots">
			<li>充值缴费</li>
			<li>我的</li>
			<li>服务中心</li>
		</ul>
 </div>


 
</template>
<script>
 export default {
    data() {
      return {
        list: [],
        topStatus: '',
        wrapperHeight: 0,
        allLoaded:false
      };
    },

    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },

      loadTop() {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
        if(!this.loading&&!this.allLoaded){
                    this.loading = true;
                     this.fetch.next().then( (d) =>{
                         this.loading = false;
                         let items = d.data.items;
                         items.forEach((e) =>{
                              this.list.push(e);
                         });
                    },(err)=>{ 
                         this.loading = false;
                         this.allLoaded = true;
                         // console.log(err);
                    })
                }   	
      }
    },

    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };

</script>