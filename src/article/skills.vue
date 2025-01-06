<script setup lang="ts">
import { skills } from '~/const.ts'
</script>

<template>
  <article id="skills">
    <h2>Tech Stack:</h2>
    <ul :class="$style.skills">
      <li v-for="({ icon, stack, value }, index) in skills" :key="index">
        <div :class="$style.diagram" :style="{ '--p': value }"><img :src="icon" /></div>
        <span v-for="(item, index) in stack" :key="index">{{ item }}</span>
      </li>
    </ul>
    <div class="align_center">
      <a :class="$style.codewars" href="https://www.codewars.com/users/mrHoft">
        <img src="https://www.codewars.com/users/mrHoft/badges/large" alt="codewars" />
      </a>
    </div>
  </article>
</template>

<style module>
.codewars {
  width: calc(min(100%, 400px));
}
.codewars img {
  width: 100%;
}

.skills {
  display: flex;
  flex-wrap: wrap;
}
.skills li {
  flex: 1 0 calc(16% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.skills span {
  line-height: 1.4;
  text-align: center;
}

.diagram {
  --dia-size: 3.5rem;
  --v: calc(((18 / 5) * var(--p) - 90) * 1deg);
  margin-bottom: 0.25rem;
  box-sizing: border-box;
  width: var(--dia-size);
  height: var(--dia-size);
  overflow: hidden;
  border-radius: 50%;
  padding: calc(var(--dia-size) * 0.15);
  background: linear-gradient(var(--color20), var(--color20)) content-box,
    linear-gradient(var(--v), transparent 50%, var(--color40) 0) 0 / min(100%, (var(--p) - 50) * 100%),
    linear-gradient(to right, var(--color00) 50%, var(--color40) 0);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
.diagram img {
  width: 75%;
  filter: invert(var(--color-scheme));
}
</style>
