
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
    { name: 'description', content: 'これまで大切に受け継いできたものを残し、ここで暮らし続けたいという想いを未来へ繋いでいくために。そんな、くらしの「絆」を、私たちと広げてみませんか。' },
    { name: 'ogDescription', content: 'これまで大切に受け継いできたものを残し、ここで暮らし続けたいという想いを未来へ繋いでいくために。そんな、くらしの「絆」を、私たちと広げてみませんか。' },
    { name: 'ogImage', content: '' },
    { name: 'twitterCard', content: '' }
  ],
})

</script>
