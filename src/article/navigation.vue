<script>
import { menu } from '~/const.ts'
export default {
  setup() {
    return { menu }
  },
}
</script>

<template>
  <aside :class="$style.aside">
    <nav :class="$style.nav">
      <ul>
        <li v-for="({ icon, title }, key) in menu" :key="key">
          <a :href="`#${key}`">
            <img :src="icon" :alt="key" />
            <span :class="$style.tip">{{ title }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style module>
.aside {
  padding: 1rem;
  background-color: var(--color10);
  border-radius: 2rem 0 0 2rem;
  position: sticky;
  align-self: start;
  top: 5%;
  z-index: 10;
}

.nav a,
.nav a:hover {
  color: var(--color100);
}

.nav li {
  position: relative;
}
.nav svg,
.nav img {
  width: 2rem;
  padding: 0.5rem;
  filter: invert(var(--color-scheme));
}
.nav li:hover svg,
.nav li:hover img {
  width: 2.5rem;
  padding: 0.25rem;
  transition-duration: 250ms;
}
.tip {
  position: absolute;
  background-color: var(--color10);
  color: var(--color100);
  font-size: 1.5rem;
  padding: 1.5rem 2rem;
  border-radius: 0 2rem 2rem 0;
  transform: translateX(4rem);
  margin-top: -0.75rem;
  white-space: nowrap;
  letter-spacing: 1px;
  visibility: hidden;
  transition-duration: 250ms;
}
.nav li:hover .tip {
  visibility: visible;
  transform: translateX(0);
}
</style>
