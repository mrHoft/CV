<template>
  <article id="info" class="info">
    <div>
      <div class="title">
        <h1>Nikolay Hoft</h1>
        <span>1984</span>
      </div>

      <p>Krasnodar, ready to relocate</p>
      <p>Frontend, Gamedev</p>
      <ul id="contacts" class="contacts">
        <h2>Contacts:</h2>
        <li><img src="/icons/email.svg" /><a href="mailto:Hoft@daytec.ru">hoft@daytec.ru</a></li>
        <li><img src="/icons/telegram.svg" /><a href="https://t.me/mrHoft">@mrHoft</a></li>
        <li><img src="/icons/discord.svg" /><a href="https://discord.gg/mr.hoft">mr.hoft</a></li>
        <li><img src="/icons/github.svg" /><a href="https://github.com/mrHoft">mrHoft</a></li>
      </ul>
    </div>

    <img class="photo" title="Author logo" src="/icons/tech_ninja.svg" alt="photo" />
  </article>
</template>

<style scoped>
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

.photo {
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 3px 3px 3px #0008;
}
</style>
