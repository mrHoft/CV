<script setup lang="ts">
import { h, type VNode } from 'vue'

const { items, itemsToShow = 1 } = defineProps<{
  items: Array<VNode>
  itemsToShow?: Number
}>()
const showNav = itemsToShow === 1
const counter = 1
const length = Math.ceil(items.length / itemsToShow)

const chunks: VNode[][] = []
for (let i = 0; i < items.length; i += itemsToShow) {
  const chunk = items.slice(i, i + itemsToShow)
  chunks.push(chunk)
}

const inputs: VNode[] = Array.from(
  { length: items.length },
  (_, i) =>
    h('input', {
      type: 'radio',
      name: `slider${counter}`,
      id: `slider${counter}_${i}`,
      defaultChecked: i === 0,
      ariaHidden: true,
    }),
  // <input key={i} type="radio" name={`slider${counter}`} id={`slider${counter}_${i}`} defaultChecked={i === 0} aria-hidden={true} />
)

const slides: VNode[] = Array.from({ length }, (_, i) => {
  const prev = i - 1 < 0 ? length - 1 : i - 1
  const next = i + 1 > length - 1 ? 0 : i + 1

  return h(
    'li',
    {
      key: i,
      class: 'slider__item',
    },
    [
      ...chunks[i]?.map((item, index) => h('div', { key: index, class: `slider__card${itemsToShow}` }, h(item))),
      h('div', { class: 'slider__ctrl' }, [
        h('label', { for: `slider${counter}_${prev}`, class: 'slider__ctrl_prev' }),
        h('label', { for: `slider${counter}_${next}`, class: 'slider__ctrl_next' }),
      ]),
    ],
  )
})

const slidesMobile: VNode[] = Array.from({ length: items.length }, (_, i) => {
  const prev = i - 1 < 0 ? items.length - 1 : i - 1
  const next = i + 1 > items.length - 1 ? 0 : i + 1

  return h(
    'li',
    {
      key: i,
      class: 'slider__item',
    },
    [
      h('div', { class: 'slider__card1' }, [items[i]]),
      h('div', { class: 'slider__ctrl' }, [
        h('label', { for: `slider${counter}_${prev}`, class: 'slider__ctrl_prev' }),
        h('label', { for: `slider${counter}_${next}`, class: 'slider__ctrl_next' }),
      ]),
    ],
  )
})

const navItems: VNode[] = Array.from({ length }, (_, i) =>
  h(
    'li',
    {
      key: i,
      class: 'slider__nav_item',
    },
    [h('label', { for: `slider${counter}_${i}` })],
  ),
)
</script>

<template>
  <div class="slider" aria-label="Slider">
    <component v-for="item in inputs" :is="item" />
    <div v-if="length" class="slider__sides"></div>
    <div class="slider__sides_mobile"></div>
    <div class="slider__wrap">
      <div class="slider__container">
        <ul class="slider__list">
          <component v-for="item in slides" :is="item" />
        </ul>
        <ul class="slider__list_mobile">
          <component v-for="item in slidesMobile" :is="item" />
        </ul>
      </div>
    </div>
    <ul v-if="showNav" class="slider__nav">
      <component v-for="item in navItems" :is="item" />
    </ul>
  </div>
</template>

<style src="./slider.css"></style>
