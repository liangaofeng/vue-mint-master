<template>
    <div class="body myFamily">
        <div class="myFamily-main">
            <mt-cell-swipe v-for="item in famliys" @click.native="change(item)" class="myFamily-mt"
                           :title="item.name"
                           :right="[{content: '删除',style: { background: 'red', color: '#fff' },handler: () => messagebox(item) }]">
                <slot>
                    <input type="radio">
                    <img v-show.async="defaultId!=item.family_id" src="../../../assets/images/my/meixuanzhong.png">
                    <img v-show.async="defaultId==item.family_id" src="../../../assets/images/my/xuanzhong.png">
                </slot>
            </mt-cell-swipe>
            <mt-field label="新增" placeholder="请输入新增" v-model="value">
            </mt-field>
        </div>
        <div class="buts">
            <mt-button type="default" size="large" v-bind:class="{'bgcolor': value}" @click="addFamily()">保存</mt-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                defaultId: sessionStorage.family || '0',
                famliys: [],
                value: ''
            };
        },
        mounted() {
            this.getFamily();
        },
        created() {

        },
        methods: {
            change(famliy,_is_frist){
                sessionStorage.family =famliy.family_id;
                sessionStorage.familyName =famliy.name;
                this.defaultId = famliy.family_id;
                if(!_is_frist) this.$router.go(-1);
            },
            getFamily(){
                let that = this;
                that.famliys = [];
                this.Fetch("getfamliy", {}).fetchData().then(function (json) {
                    that.famliys = json.data.items;
                    that.change({name:'',family_id:that.defaultId},true);
                });
            },
            messagebox(_famliy){
                let that = this;
                this.$messagebox.confirm('确定执行此操作?').then(function () {
                    that.Fetch("delfamily", {family_id: _famliy.family_id}).fetchData().then(function () {
                        that.famliys.forEach(function (item, index) {
                            if (item.family_id == _famliy.family_id) {
                                that.famliys.splice(index, 1);
                                return;
                            }
                        });
                    })
                })
            },
            addFamily(){
                let that = this;
                this.Fetch("addfamily", {name: this.value}).fetchData().then(function (json) {
                    if (json.code == 1000) {
                        that.defaultId = json.data;
                        sessionStorage.family = json.data;
                        var _famliy_ = {};
                        _famliy_.family_id = json.data;
                        _famliy_.name = that.value;
                        that.famliys.push(_famliy_);
                        that.value = '';
                        that.change(_famliy_,true);
                    }
                });
            }
        }
    };
</script>


<style lang="scss">
  .bgcolor{background-color: #00b8a8!important; color:#fff!important;}
    .myFamily {
        width: 100%;
        height: 100%;
        padding-top: 0.85rem;
    }

    .myFamily .buts {
        margin: 15px;
    }

    .myFamily-main {
        width: 100%;
        border-bottom: 1px solid #d3d3d3;

    }

    .mint-cell-wrapper {
        height: 4.8rem;
        font-size: 1.6rem;
        color: #474747;
    }

    .mint-cell-right {
        height: 4.8rem;
        line-height: 4.8rem;
        font-size: 1.6rem;
    }

    .myFamily-mt {

    img {
        width: 2rem;
        height: 2rem;
    }

    }
</style>
