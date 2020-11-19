<template>
  <header class="bg-gradient-to-r from-green-400 to-teal-400">
    <nav>
      <ul class="flex justify-center space-x-10 py-6">
        <li>
          <NuxtLink class="hover:underline hover:text-green-800 focus:outline-none" to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover:underline hover:text-green-800 focus:outline-none" to="/blog">Blog</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>