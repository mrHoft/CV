<script setup>
import { exp } from '~/const.ts'
</script>

<template>
  <article id="exp" class="exp">
    <h2>Experience:</h2>
    <table class="table">
      <thead>
        <tr>
          <td style="width: 6rem">Period</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="({ period, title, desc, projects }, index) in exp" :key="index">
          <td>{{ period }}</td>
          <td>
            <h4>{{ title }}</h4>
            <p v-if="desc">{{ desc }}</p>
            <ul v-if="projects">
              <li v-for="({ title, desc, href }, index) in projects" :key="index">
                <a :href="href" target="_blank">{{ title }}</a>
                <span v-if="desc"> ( {{ desc }})</span>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<style scoped>
.table {
  width: 100%;
  border-bottom: 1px solid var(--color10);
}
.table thead {
  background-color: var(--color10);
  text-align: center;
}
.table tr:nth-of-type(2n + 2) {
  background-color: var(--color10);
}

.exp ul {
  position: relative;
  margin-left: 1.5rem;
}
.exp li {
  padding: 0.2rem 0;
}
.exp li::before {
  content: '';
  position: absolute;
  left: -1rem;
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background: var(--color40);
  transform: translate(-50%, 100%);
  clip-path: polygon(100% 50%, 0 0, 0 100%);
}
</style>
