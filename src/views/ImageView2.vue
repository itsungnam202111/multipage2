<template>
  <div>
    <h3>강아지 보기</h3>
      <div v-for="item of json" :key="item" class="image_box">
         <img :src="'https://random.dog/'+item" :data-src="'https://random.dog/'+item" width="150" height="150" onerror="this.style.display='none';"/>
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
      const urlAddress = `https://random.dog/doggos`;
      let data = null;
      await axios.get(urlAddress)
      .then(function (response) {
          // 성공 핸들링
          data = response.data;
          console.log("mounted axios 결과  : " + data.length);
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
