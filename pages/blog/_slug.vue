<template>
  <div class="bg-gray-100 min-h-screen">
    <article class="blog-container md:px-10 md:py-10">
      <div class="mt-4 grid lg:grid-cols-4">
        <div class="lg:col-span-3 lg:pr-10 overflow-hidden">
          <nuxt-content class="prose-sm prose max-w-none mx-auto px-2 py-6 md:p-10 bg-gray-200 rounded" :document="article" />
        </div>
        <div class="lg:col-span-1 hidden lg:block relative">
          <nav class="sticky top-0 pt-4">
            <ul>
              <li v-for="link of article.toc" :key="link.id">
                <NuxtLink class="block hover:underline" :class="{'pt-2': link.depth === 2, 'pl-4': link.depth === 3}" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  
      <div class="mt-10 flex space-x-4">
        <NuxtLink class="btn hover:bg-green-500 hover:text-gray-100" to="/">Back to Home</NuxtLink>
        <NuxtLink class="btn hover:bg-green-500 hover:text-gray-100" to="/blog">Back to Blog</NuxtLink>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      // fetch article
      const article = await $content('articles', params.slug).fetch()

      return { article }
    },
    methods: {
      formatDate(date) {
        return new Date(date).toLocaleDateString('en-GB');
      }
    }
  }
</script>
<style scoped>
</style>