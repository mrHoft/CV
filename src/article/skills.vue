<template>
  <article id="skills">
    <h2>Tech Stack:</h2>
    <ul class="skills">
      <li>
        <div class="diagram skill-html"><img src="/icons/html.svg" /></div>
        <p>HTML5</p>
      </li>
      <li>
        <div class="diagram skill-css3"><img src="/icons/css3.svg" /></div>
        <p>CSS3</p>
        <p>SCSS</p>
        <p>CSS in JS</p>
      </li>
      <li>
        <div class="diagram skill-js">JS</div>
        <p>JavaScript</p>
        <p>TypeScript</p>
      </li>
      <li>
        <div class="diagram skill-node"><img src="/icons/nodejs.svg" /></div>
        <p>Node.js</p>
        <p>Express.js</p>
        <p>Deno</p>
      </li>
      <li>
        <div class="diagram skill-react"><img src="/icons/react.svg" /></div>
        <p>React</p>
        <p>Redux</p>
        <p>Next</p>
      </li>
      <li>
        <div class="diagram skill-vue"><img src="/icons/vue.svg" /></div>
        <p>Vue</p>
        <p>Nuxt</p>
      </li>
      <li>
        <div class="diagram skill-parcer"><img src="/icons/webpack.svg" /></div>
        <p>Webpack</p>
        <p>Rollup</p>
        <p>Vite</p>
      </li>
      <li>
        <div class="diagram skill-test"><img src="/icons/test.svg" /></div>
        <p>Chai</p>
        <p>Mocha</p>
        <p>Jest</p>
      </li>
      <li>
        <div class="diagram skill-sql">SQL</div>
        <p>SQL</p>
        <p>Postgres</p>
      </li>
      <li>
        <div class="diagram skill-docker"><img src="/icons/docker.svg" /></div>
        <p>Docker</p>
        <p>Compose</p>
      </li>
      <li>
        <div class="diagram skill-linux"><img src="/icons/linux.svg" /></div>
        <p>Unix systems</p>
        <P>Nginx</P>
      </li>
      <li>
        <div class="diagram skill-aws"><img src="/icons/aws.svg" /></div>
        <p>aws</p>
      </li>
    </ul>
    <div class="align-center">
      <a href="https://www.codewars.com/users/mrHoft">
        <img src="https://www.codewars.com/users/mrHoft/badges/large" />
      </a>
    </div>
  </article>
</template>

<style scoped>
.skills {
  display: flex;
  flex-wrap: wrap;
}
.skills p {
  margin: 0.15rem;
  text-align: center;
}
.skills li {
  flex-basis: calc(16% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.align-center {
  display: flex;
  justify-content: center;
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
.skill-html {
  --p: 85;
}
.skill-css3 {
  --p: 85;
}
.skill-js {
  --p: 80;
}
.skill-node {
  --p: 70;
}
.skill-react {
  --p: 90;
}
.skill-vue {
  --p: 60;
}
.skill-parcer {
  --p: 85;
}
.skill-test {
  --p: 60;
}
.skill-sql {
  --p: 50;
}
.skill-docker {
  --p: 75;
}
.skill-linux {
  --p: 75;
}
.skill-aws {
  --p: 50;
}
</style>
