import Vue from 'vue'
import {GetQueryString} from './util';

class Fetch {
	constructor(action, data) {
		this.action = action;
		this.data = data;
		this.uid = GetQueryString('code')||'70'; //测试
		this.result ={};
	}
	fetchData() {
		let that = this;
		if (!this.action) console.log("请求地址不能为空");
		return new Promise((resolve, reject) => {
			   Vue.http.post(that.action,  Object.assign({uid:that.uid}, that.data)).then(function(res) {
			      if(res.data.code==1000){
			           that.result =res.data;

			        }else if(res.data.code==1009){
			          //未登陆状态统一处理
			          
			       }else{
			        
			       }
		           resolve(res.data)
		      },  function(err) { 
		           reject(err)
		      });
		})
	}
	getResult() {
		return this.result;
	}
	setAction(action) {
		this.action = action;
	}
	setData(data) {
		this.data = data;
	}
}


class FetchList extends Fetch {
	constructor(action, data) {
		super(action, data);
		this.page = 1;
		this.loaded = false;
	}
	fetchData() {
		let that = this;
		if (!that.action) console.log("请求地址不能为空");
		if(that.loaded) {
			console.log("处于取数状态..");
			return
		}else{
			that.loaded = true;
		}
		return new Promise((resolve, reject) => {
				  Vue.http.post(that.action,  Object.assign({uid:that.uid,page:that.page}, that.data)).then(function(res) {
				  that.loaded = false;
			      if(res.data.code==1000){
			           that.result =res.data;
			           if(res.data.data.items&&res.data.data.items.length<=0){
						  reject("没有更多数据")
			           }else{
			           	  resolve(res.data);
			           }
			        }else if(res.data.code==1009){
			          //未登陆状态统一处理
			          
			       }else{
			        
			       }
		          
		      },  function(err) { 
		           reject(err)
		      });
		})
	}
	next() {
		this.page++;
		this.loaded = false;
		return this.fetchData();
	}
	refresh() {
		this.page = 1;
		this.loaded = false;
		return this.fetchData();
	}
	

}

module.exports = {
	Fetch: Fetch,
	FetchList: FetchList
}