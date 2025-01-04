<script setup>
import { h, useCssModule } from 'vue'
import Slider from '~/ui/slider/slider.vue'
import CodeExample from '~/article/examples/code.vue'
import { projects } from './const.ts'

const styles = useCssModule('projects')
const items = [
  ...projects.map(item =>
    h(
      'div',
      {
        key: item.id,
        class: [styles.card, item.left ? styles.card_left : styles.card_right],
        style: `background-image: url(${item.src})`,
      },
      h('div', { class: styles.card__text }, item.left ?? item.right),
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
  background-size: auto 100%;
  background-repeat: no-repeat;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  color: #fff;
}
.card_left {
  justify-content: flex-start;
}
.card_right {
  justify-content: flex-end;
}
.card__text {
  max-width: 50%;
  box-sizing: border-box;
  background-color: #0008;
  padding: 1rem;
  border-radius: 1rem;
}
</style>
