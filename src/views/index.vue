<template>
  <div class="body page-infinite">
    <mt-cell v-for="item in routes" :title="item.meta&&item.meta.title" :label="'路由名称：'+item.name"  :href="'#/'+item.name" is-link> </mt-cell>
  </div>
</template>
 
<script>
 
import routes from '../routers';
    export default {  
         data() {
          return {  
             routes:routes
          };
      },
      mounted() {
          // console.log(routes);
      }    
    };
</script>
