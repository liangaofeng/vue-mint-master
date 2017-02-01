// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
const Index = resolve => {
    require.ensure(['./views/index.vue'], () => {
        resolve(require('./views/index.vue'));
    });
};

const routers = [{
    path: '/',
    name: 'index',
    component: Index
}, 
{
    path: '/city',
    name: 'city',
    component(resolve) {
        require.ensure(['./views/life/city/city.vue'], () => {
            resolve(require('./views/life/city/city.vue'));
        });
    },
    meta: { title:'地区城市选择' }
}, 
{
    path: '/family',
    name: 'family',
    component(resolve) {
        require.ensure(['./views/life/family/family.vue'], () => {
            resolve(require('./views/life/family/family.vue'));
        });
    },
    meta: { title:'生活缴费-家庭' }
   
}, 
{
    path: '/battery',
    name: 'battery',
    component(resolve) {
        require.ensure(['./views/life/unit/battery.vue'], () => {
            resolve(require('./views/life/unit/battery.vue'));
        });
    },
    meta: { title:'首页-生活缴费' }
},
{
    path: '/paymentCompletion',
    name: 'paymentCompletion',
    component(resolve) {
        require.ensure(['./views/life/payment/finish/completionPage/paymentCompletion.vue'], () => {
            resolve(require('./views/life/payment/finish/completionPage/paymentCompletion.vue'));
        });
    },
    meta: { title:'账单详情' }
},
{
    path: '/openingWithholding',
    name: 'openingWithholding',
    component(resolve) {
        require.ensure(['./views/life/payment/finish/completionPage/openingWithholding.vue'], () => {
            resolve(require('./views/life/payment/finish/completionPage/openingWithholding.vue'));
        });
    },
    meta: { title:'生活缴费' }
},
{
    path: '/my',
    name: 'my',
    component(resolve) {
        require.ensure(['./views/mys/my.vue'], () => {
            resolve(require('./views/mys/my.vue'));
        });
    },
    meta: { title:'我的' }
},  
{
    path: '/balanceOfPayments',
    name: 'balanceOfPayments',
    component(resolve) {
        require.ensure(['./views/mys/balanceOfPayments.vue'], () => {
            resolve(require('./views/mys/balanceOfPayments.vue'));
        });
    },
    meta: { title:'收支明细' }
},
{
    path: '/cumulativeDividend',
    name: 'cumulativeDividend',
    component(resolve) {
        require.ensure(['./views/mys/cumulativeDividend.vue'], () => {
            resolve(require('./views/mys/cumulativeDividend.vue'));
        });
    },
    meta: { title:'累计分红' }
},
{
    path: '/bonusExperience',
    name: 'bonusExperience',
    component(resolve) {
        require.ensure(['./views/mys/bonusExperience.vue'], () => {
            resolve(require('./views/mys/bonusExperience.vue'));
        });
    },
    meta: { title:'分红体验金' } 
},
{
    path: '/livingPayment',
    name: 'livingPayment',
    component(resolve) {
        require.ensure(['./views/mys/livingPayment.vue'], () => {
            resolve(require('./views/mys/livingPayment.vue'));
        });
    },
    meta: { title:'小鸡充电' } 
},
{
    path: '/recharge',
    name: 'recharge',
    component(resolve) {
        require.ensure(['./views/mys/recharge.vue'], () => {
            resolve(require('./views/mys/recharge.vue'));
        });
    },
    meta: { title:'充值' }  
},
{
    path: '/changeRecharge',
    name: 'changeRecharge',
    component(resolve) {
        require.ensure(['./views/mys/changeRecharge.vue'], () => {
            resolve(require('./views/mys/changeRecharge.vue'));
        });
    },
    meta: { title:'零钱充值' }   //余额不够充值存票页面
},
{
    path: '/changeRechargeSuccess',
    name: 'changeRechargeSuccess',
    component(resolve) {
        require.ensure(['./views/mys/changeRechargeSuccess.vue'], () => {
            resolve(require('./views/mys/changeRechargeSuccess.vue'));
        });
    },
    meta: { title:'零钱充值' }   //零钱充值成功页面
},
{
    path: '/cardPay',
    name: 'cardPay',
    component(resolve) {
        require.ensure(['./views/mys/cardPay.vue'], () => {
            resolve(require('./views/mys/cardPay.vue'));
        });
    },
    meta: { title:'家庭' }  //我的页面缴电费里的家庭页面
}, 
{
    path: '/paybill',
    name: 'paybill',
    component(resolve) {
        require.ensure(['./views/life/lifepay/paybill.vue'], () => {
            resolve(require('./views/life/lifepay/paybill.vue'));
        });
    },
    meta: { title:'缴费账单' }  //5021---生活缴电费里的缴费账单
},  
{
    path: '/billdetails',
    name: 'billdetails',
    component(resolve) {
        require.ensure(['./views/life/lifepay/billdetails.vue'], () => {
            resolve(require('./views/life/lifepay/billdetails.vue'));
        });
    },
    meta: { title:'账单详情' }   //5021----生活缴电费里的账单详情
 }, 
 {
    path: '/billsuer',
    name: 'billsuer',
    component(resolve) {
        require.ensure(['./views/life/lifepay/billsuer.vue'], () => {
            resolve(require('./views/life/lifepay/billsuer.vue'));
        });
    },
    meta: { title:'账单详情' }  //5021----生活缴电费交易成功账单详情
 },
 {
    path: '/pays',
    name: 'pays',
    component(resolve) {
        require.ensure(['./views/life/lifepay/pays.vue'], () => {
            resolve(require('./views/life/lifepay/pays.vue'));
        });
    },
    meta: { title:'缴费' }    //5021----生活缴电费--预付缴费
 }, 
 {
    path: '/payfees',
    name: 'payfees',
    component(resolve) {
        require.ensure(['./views/life/lifepay/payfees.vue'], () => {
            resolve(require('./views/life/lifepay/payfees.vue'));
        });
    },
    meta: { title:'缴费' }   //5021----生活缴电费--预付缴费
 }, 
{
    path: '/billerror',
    name: 'billerror',
    component(resolve) {
        require.ensure(['./views/life/error/billerror.vue'], () => {
            resolve(require('./views/life/error/billerror.vue'));
        });
    },
    meta: { title:'户号错误' } //5021----生活缴电费--户号错误
 }, 
{
    path: '/indhome',
    name: 'indhome',
    component(resolve) {
        require.ensure(['./views/life/home/indhome.vue'], () => {
            resolve(require('./views/life/home/indhome.vue'));
        });
    },
    meta: { title:'生活缴电费首页' } //5021----生活缴电费首页
 }, 
 {
    path: '/payafter',
    name: 'payafter',
    component(resolve) {
        require.ensure(['./views/life/lifepay/payafter.vue'], () => {
            resolve(require('./views/life/lifepay/payafter.vue'));
        });
    },
    meta: { title:'生活缴电费--后付缴费' } //5021----生活缴电费--后付缴费
 },
  {
    path: '/units',
    name: 'units',
    component(resolve) {
        require.ensure(['./views/life/unit/units.vue'], () => {
            resolve(require('./views/life/unit/units.vue'));
        });
    },
    meta: { title:'生活缴电费--缴费单位' }//5021----生活缴单位
 },  
 {
    path: '/familys',
    name: 'familys',
    component(resolve) {
        require.ensure(['./views/life/family/familys.vue'], () => {
            resolve(require('./views/life/family/familys.vue'));
        });
    },
    meta: { title:'生活缴电费--家庭' }  //5021----生活缴家庭
 }, 
 {
    path: '/agreement',
    name: 'agreement',
    component(resolve) {
        require.ensure(['./views/life/agreement/Withhold.vue'], () => {
            resolve(require('./views/life/agreement/Withhold.vue'));
        });
    },
    meta: { title:'代扣协议' }//423----代扣协议
 },                                               
{
    path: '*',
    component: Index
}];

export default routers;