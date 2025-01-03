<script setup lang="ts">
import { Navigation, Info, About, Skills, Experience, Education, Codeexample } from './article'
</script>

<template>
  <Navigation />
  <div class="content">
    <main>
      <Info />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Codeexample />
    </main>
    <footer class="footer">
      <span>© 2025 <a href="https://github.com/mrHoft">mrHoft</a></span>
    </footer>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
}

footer {
  box-sizing: border-box;
  margin: 0;
  padding: 1em;
  width: 100%;
  background-color: var(--color20);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
footer img {
  filter: invert(var(--color-scheme));
}
</style>
