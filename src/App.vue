<script setup lang="ts">
import { Navigation, Info, About, Skills, Experience, Education, CodeExample, Examples } from './article'
</script>

<template>
  <Navigation />
  <div :class="$style.content">
    <main>
      <Info />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Examples />
    </main>
    <footer class="footer">
      <span>© 2025 <a href="https://github.com/mrHoft">mrHoft</a></span>
    </footer>
  </div>
</template>

<style module>
.content {
  width: 100%;
}

footer {
  box-sizing: border-box;
  margin: 0;
  padding: 1em;
  width: 100%;
  background-color: var(--color10);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
footer img {
  filter: invert(var(--color-scheme));
}
</style>
