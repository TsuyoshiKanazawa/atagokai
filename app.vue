
<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '社会福祉法人 愛宕会',
  meta: [
    { name: 'ogTitle', content: '社会福祉法人 愛宕会' },
    { name: 'description', content: '社会福祉法人 愛宕会' },
    { name: 'ogDescription', content: '社会福祉法人 愛宕会' },
    { name: 'ogImage', content: '' },
    { name: 'twitterCard', content: '' }
  ],
})
</script>
