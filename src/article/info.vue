<script setup lang="ts">
import { contacts } from '~/const.ts'
</script>

<template>
  <article id="info" :class="$style.info">
    <div>
      <div :class="$style.title">
        <h1>Nikolay Hoft</h1>
        <span>1984</span>
      </div>

      <p>Krasnodar, ready to relocate</p>
      <p>Frontend, Gamedev</p>
      <ul id="contacts" :class="$style.contacts">
        <h2>Contacts:</h2>
        <li v-for="({ icon, title, href }, index) in contacts" :key="index">
          <img :src="icon" />
          <a :href="href" target="_blank">{{ title }}</a>
        </li>
      </ul>
    </div>
    <div :class="$style.logo">
      <img :class="$style.avatar" src="/icons/tech_ninja.svg" alt="avatar" />
      <img :class="$style.photo" src="/images/photo.jpg" alt="photo" />
    </div>
  </article>
</template>

<style module>
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.contacts {
  padding-top: 1.5rem;
}
.contacts li {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
}
.contacts li img {
  width: 2rem;
  margin-right: 1rem;
  filter: invert(var(--color-scheme));
}

.logo {
  position: relative;
  width: calc(min(30vw, 16rem));
  height: calc(min(30vw, 16rem));
}

.avatar,
.photo {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 50%;
  box-shadow: 3px 3px 3px #0008;
  transition: opacity 0.25s ease-in;
}
.photo {
  opacity: 0;
}
.logo:hover .avatar {
  opacity: 0;
}
.logo:hover .photo {
  opacity: 1;
}
</style>
