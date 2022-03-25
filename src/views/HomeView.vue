<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>
    <div class="h2 mb-0">
      <h2> {{ message1}} </h2>
      <b-button style="margin-right:5px;" variant="primary" id="btn1">경고창</b-button>
      <b-button style="margin-right:5px;" variant="secondary" id="btn2">색상변경</b-button>
      <b-button style="margin-right:5px;" variant="danger"  id="btn3">해</b-button>
      <b-button style="margin-right:5px;" v-b-tooltip.hover title="Tooltip content">Hover Me</b-button>
      <hr>
      <h2> {{ message2}} </h2>
      <!-- 아이콘사용 -->
      <BootstrapIcon icon="bar-chart-fill" /> <br>
      <BootstrapIcon icon="bar-chart-fill" flip-h variant="danger"/> <br>
      <BootstrapIcon icon="bar-chart-fill" flip-v/> <br>
      <BootstrapIcon icon="arrow-up"/> <br>
      <BootstrapIcon icon="exclamation-triangle-fill" variant="success" size="5x" animation="spin-reverse"/> <br>
      <BootstrapIcon icon="exclamation-circle-fill" variant="success"></BootstrapIcon>
      <BootstrapIcon icon="exclamation-circle-fill" variant="warning"></BootstrapIcon>
      <BootstrapIcon icon="exclamation-circle-fill" variant="danger"></BootstrapIcon>
      <BootstrapIcon icon="exclamation-circle-fill" variant="info"></BootstrapIcon>
      <BootstrapIcon icon="exclamation-circle-fill" variant="primary"></BootstrapIcon>
      <BootstrapIcon icon="exclamation-circle-fill" variant="secondary"></BootstrapIcon>
      <BootstrapIcon icon="exclamation-circle-fill" variant="dark"></BootstrapIcon>   
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// jquery를 사용하는 파일에 import 후 사용
import $ from 'jquery';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    return {
      message1 : "Hello Jquery!!!" ,
      message2 : "Hello Bootstrap Icon!!!" 
    }
  },
  mounted() { // 여기에서 Jquery를 사용함
    const className = ['btn-primary','btn-secondary','btn-success','btn-warning','btn-danger','btn-info','btn-dark']
    let   index = 1;
    const tenSymbols = "해,산,물,돌,달,소나무,불로초,거북,두루미,사슴".split(',');
    let   idx = 0; 
    $('#btn1').click(function() {
        alert('hi');
    });
    $('#btn2').click(function() {
        $(this).removeClass(className[index]);
        index = ++index%className.length;
        $(this).addClass(className[index]);
    });
    $('#btn3').click(function() {
        idx = ++idx%tenSymbols.length;
        $(this).html(tenSymbols[idx])
    });
  }
}
</script>
