<template>
  <div class="container max-w-none mx-auto min-h-screen">
    <div class="blog-container md:px-10 md:pt-10">
      <ul>
        <li v-for="article of articles" :key="article.slug" class="my-2 rounded hover:bg-gray-200">
          <NuxtLink class="px-4 py-3 block" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div>
              <p class="text-sm text-green-600">{{ formatDate(article.createdAt) }}</p>
              <h2 class="font-extrabold">{{ article.title }}</h2>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug', 'author', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()
    
    return {
      articles
    }
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-GB');
    }
  }
}
</script>