<template>
<div class="bg-gray-100">
  <article class="content-container md:px-10 md:py-10">

    <div class="wrapper">
      <div class="mt-4 grid lg:grid-cols-4">
        <!-- Content -->
        <div class="lg:col-span-3 lg:mr-10 overflow-hidden bg-white rounded px-4 py-6 md:p-10">
          <p class="text-sm text-gray-500">{{ formatDate(article.createdAt) }}</p>
          <nuxt-content class="mt-4 prose-sm prose max-w-none mx-auto " :document="article" />
          <author class="mt-8 pt-8 lg:hidden border-t-2 border-dashed" :author="article.author"></author>
        </div>
        <!-- Table of Content -->
        <div class="hidden lg:block lg:col-span-1 relative">
          <nav class="sticky top-0 pt-4">
            <ul>
              <li v-for="link of article.toc" :key="link.id">
                <NuxtLink class="block hover:underline" :class="{'pt-2 leading-relaxed': link.depth === 2, 'pl-4 leading-normal': link.depth === 3}" :to="`#${link.id}`">{{ link.text }}</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- Button Group -->
    <div class="mt-8 px-2 flex space-x-4">
      <NuxtLink class="btn hover:bg-green-500 hover:text-gray-100" to="/">Back to Home</NuxtLink>
      <NuxtLink class="btn hover:bg-green-500 hover:text-gray-100" to="/blog">Back to Blog</NuxtLink>
    </div>

  </article>
</div>
</template>

<script>
export default {
  async asyncData({
    $content,
    params
  }) {
    // fetch article
    const article = await $content('articles', params.slug).fetch()

    return {
      article
    }
  },
  methods: {
    formatDate(date) {
      let options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('en-US', options);
    }
  }
}
</script>

<style scoped>
</style>
