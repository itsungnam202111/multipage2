<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ message }}</h1>
    <!-- bootstrap button -->
    <b-button variant="outline-success" id="btn1" class="btn">문자열뒤집기 1</b-button>
    <b-button variant="outline-success" id="btn2" class="btn" @click="reverseMessage">문자열뒤집기 2</b-button>
    <b-button variant="outline-success" id="btn3" class="btn" v-on:click="reverseMessage">문자열뒤집기 3</b-button>
    <br><br>
    <!-- bootstrap accordion -->
    <b-accordion style="width:80%;margin:auto;">
      <b-accordion-item :title="'애국가 Accordion ' + (index+1) + '절'" v-for="(item, index) of text.split('\n')" :key="index">
        <strong>{{index+1}} 절 : </strong>{{item}}  
      </b-accordion-item>
    </b-accordion>
    <!-- bootstrap card -->
    <div class="cards-box mt-12">
      <ImageCard :data="data" v-for="data of cards" :key="data.title"/>
    </div>
  </div>
</template>

<script>
import ImageCard from '@/components/ImageCard.vue'
import $ from 'jquery';
// npm install raw-loader –save-dev
import txt from 'raw-loader!../assets/song.txt'; // 텍스트 파일 읽기
let cards = [
  {title : "이미지카드01",src: "https://picsum.photos/200/150?random=1",text:"아마도 내용이지1!!!",link:"눌러봐",linkUrl:"https://picsum.photos/200/150?random=13"},
  {title : "이미지카드02",src: "https://picsum.photos/200/150?random=2",text:"아마도 내용이지2!!!",link:"눌러봐",linkUrl:"https://picsum.photos/200/150?random=23"},
  {title : "이미지카드03",src: "https://picsum.photos/200/150?random=3",text:"아마도 내용이지3!!!",link:"눌러봐",linkUrl:"https://picsum.photos/200/150?random=33"},
  {title : "이미지카드04",src: "https://picsum.photos/200/150?random=4",text:"아마도 내용이지4!!!",link:"눌러봐",linkUrl:"https://picsum.photos/200/150?random=43"},
  {title : "이미지카드05",src: "https://picsum.photos/200/150?random=5",text:"아마도 내용이지5!!!",link:"눌러봐",linkUrl:"https://picsum.photos/200/150?random=53"},
  {title : "이미지카드06",src: "https://picsum.photos/200/150?random=6",text:"아마도 내용이지6!!!",link:"눌러봐",linkUrl:"https://picsum.photos/200/150?random=63"},
  {title : "이미지카드07",src: "https://picsum.photos/200/150?random=7",text:"아마도 내용이지7!!!",link:"눌러봐",linkUrl:"https://picsum.photos/200/150?random=73"},
  {title : "이미지카드08",src: "https://picsum.photos/200/150?random=8",text:"아마도 내용이지8!!!",link:"눌러봐",linkUrl:"https://picsum.photos/200/150?random=83"},
  {title : "이미지카드09",src: "https://picsum.photos/200/150?random=9",text:"아마도 내용이지9!!!",link:"눌러봐",linkUrl:"https://picsum.photos/200/150?random=93"},
  {title : "이미지카드10",src: "https://picsum.photos/200/150?random=0",text:"아마도 내용이지9!!!",link:"눌러봐",linkUrl:"https://picsum.photos/200/150?random=03"},
];
export default {
  components: {
    ImageCard
  },
  data() {
    return {
      message : "This is an about page",
      text : txt,
      cards : cards
    }
  },
  mounted() {
    $("#btn1").click(function(){
      console.log(`메세지 :  ${this.message}`); // 여기서 this를 인식 못함!!!
      console.log($(this).html());
    });
  },
  methods : {
    reverseMessage() {
      // console.log(`reverseMessage : ${this.message}`)
      this.message = this.message.split('').reverse().join('')
    }
  },
}
</script>
<style>
  .btn {
    margin-right:5px;
  }
  .cards-box {
            display: flex;
            justify-content: space-between;
            margin: 0 70px;
            margin-top: 65px;
            flex-wrap: wrap;
        }
</style>
