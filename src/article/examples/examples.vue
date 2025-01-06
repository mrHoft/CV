<script setup>
import { h, useCssModule } from 'vue'
import Slider from '~/ui/slider/slider.vue'
import CodeExample from '~/article/examples/code.vue'
import { projects } from '~/const.ts'

const styles = useCssModule('projects')
const items = [
  ...projects.map(item =>
    h(
      'a',
      {
        key: item.id,
        href: item.href,
        target: '_blank',
        class: [styles.card, item.left ? styles.card_left : styles.card_right],
        style: `background-image: url(${item.src})`,
      },
      h('div', { class: [styles.card__splash, item.left ? styles.card__splash_left : styles.card__splash_right] }, [
        h('h2', { innerHTML: item.title }),
        item.left ?? item.right,
      ]),
    ),
  ),
  CodeExample,
]
</script>

<template>
  <article id="examples">
    <h2 :class="styles.title">Projects:</h2>
    <Slider :items="items" />
  </article>
</template>

<style module="projects">
.title {
  margin-bottom: 1rem;
}
.card {
  width: 100%;
  height: 100%;
  background-color: var(--color10);
  background-size: auto 100%;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: #fff;
}

.card_left {
  justify-content: flex-start;
  border-radius: 0.5rem 0.5rem 0 0;
}
.card_right {
  justify-content: flex-end;
}

.card__splash {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 100%;
  box-sizing: border-box;
  background-color: #0008;
  padding: 1rem 2rem;
  transition: opacity 0.25s linear;
}
.card:hover .card__splash {
  opacity: 0;
}
.card__splash_left {
  border-radius: 0.5rem 0 0 0.5rem;
}
.card__splash_right {
  border-radius: 0 0.5rem 0.5rem 0;
}

@media (max-width: 840px) {
  .card__splash {
    width: 100%;
    border-radius: 0.5rem;
  }
}
</style>
