<script setup lang="ts">
import { edu, lang } from '~/const.ts'
</script>

<template>
  <article id="edu" :class="$style.edu">
    <h2>Education:</h2>
    <ul>
      <li v-for="({ title, href, course, desc }, index) in edu" :key="index">
        <span>{{ title }}: </span>
        <a v-if="course" :href="href" target="_blank"> {{ course }}. </a>
        <span v-if="desc">{{ desc }}</span>
      </li>
    </ul>
  </article>

  <article id="lang" :class="$style.lang">
    <h2>Languages:</h2>
    <ul>
      <li v-for="(item, index) in lang" :key="index">{{ item }}</li>
    </ul>
  </article>
</template>

<style module>
.edu ul,
.lang ul {
  position: relative;
  margin-left: 2rem;
}
.edu ul::before,
.lang ul::before {
  content: '';
  position: absolute;
  top: 0;
  left: -1rem;
  display: block;
  width: 3px;
  height: 100%;
  border-radius: 3px;
  background: var(--color40);
}
#exp li {
  padding: 0.2rem 0;
}
.edu li,
.lang li {
  padding: 0.5rem 0;
}
.edu li::before,
.lang li::before {
  content: '';
  position: absolute;
  left: calc(-1rem + 2px);
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  background: var(--color40);
  transform: translate(-50%, 50%);
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
}
</style>
