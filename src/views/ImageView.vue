<template>
  <div>
    <h3>Image 보기</h3>
      <div v-for="item of json" :key="item.id" class="image_box">
          <a :href="item.download_url"><img :src="item.download_url" width="300" height="300" :title="item.author"/></a>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  components: {
   
  },
  data() {
    return {
      json : '',
    }
  },
  mounted: async function() {
      let page = parseInt(Math.random()*10)+1;
      console.log(page);
      const urlAddress = `https://picsum.photos/v2/list?page=${page}&limit=100`;
      let data = null;
      await axios.get(urlAddress)
      .then(function (response) {
          // 성공 핸들링
          data = response.data;
          console.log("mounted axios 결과  : " + JSON.stringify(data));
        }).catch(function(error){
          // 실패 핸들링
          console.log(`mounted 에러 : ${error.message}`)
        });
        this.json = data;
  },
  methods : {

  },
}
</script>
<style>
  .image_box{
    padding: 5px;
    text-align: center;
    float: left;
    justify-content: space-between;
  }
  h3 {text-align:center;}
</style>
