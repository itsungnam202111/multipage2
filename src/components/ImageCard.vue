<template>
    <b-card 
        :title="data.title"
        :img-src="data.src"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 30rem;"
        class="mb-4">
        <b-card-text>
          {{data.text}}
        </b-card-text>
        <b-button :href="data.linkUrl" variant="danger">{{data.link}}</b-button>
      </b-card>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    data: Object
  }
}
</script>

<style scoped>
  div.card2 { float: left;}
</style>
