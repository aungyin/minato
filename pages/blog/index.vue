<template>
  <div class="container max-w-none mx-auto">
    <div class="content-container md:px-10 md:pt-10">
      <NuxtLink :to="{ name: 'blog-slug', params: { slug: latestArticle.slug }}">
        <div class="px-12 py-6 md:py-10 hover:bg-white border border-green-200 rounded">
          <h2 class="font-semibold text-2xl md:text-3xl tracking-wider text-green-500">{{ latestArticle.title }}</h2>
          <p class="mt-2 md:mt-4 text-sm text-gray-600">{{ formatDate(latestArticle.createdAt) }}</p>
        </div>
      </NuxtLink>
      <ul>
        <li v-for="article of articles" :key="article.slug"
          class="my-2 rounded hover:bg-white hover:border hover:border-green-200">
          <NuxtLink class="px-4 py-3 block" :to="{ name: 'blog-slug', params: { slug: article.slug } }">
            <div>
              <h2 class="font-semibold tracking-wide">{{ article.title }}</h2>
              <p class="mt-1 text-sm text-gray-600">{{ formatDate(article.createdAt) }}</p>
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
      .sortBy('createdAt', 'desc')
      .fetch()

    const latestArticle = articles.shift()
    
    return {
      latestArticle,
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