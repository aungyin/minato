<template>
  <div class="flex items-center justify-start">
    <img
      :src="require(`~/assets/images/${author.image}`)"
      class="w-12 h-12 object-cover rounded-full">
    <div class="leading-tight pl-2 text-sm text-gray-700">
      <p>{{ author.name }}</p>
      <p v-if="author.bio">{{ author.bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>