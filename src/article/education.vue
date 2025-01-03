<template>
<article id="edu" class="edu">
  <h2>Education:</h2>
  <ul>
    <li>RSSchool. <a href="https://app.rs.school/certificate/nehax0ao" target="_blank">Frontend 2023Q4</a>.</li>
    <li>RSSchool. <a href="https://app.rs.school/certificate/cr6ohdtm" target="_blank">Frontend 2023Q2</a>.</li>
    <li>Y.Practicum. <a href="https://drive.google.com/file/d/1LhYPyJ304XXBK46uxsqkpT5WMUCzunlK/view" target="_blank">Middle frontend-developer</a>.</li>
    <li>
      PSKhK УТ-1 470695. The “programmer” certificate was received along with a diploma of a geodesist at the initiative of a computer science teacher for
      winning Olympiads.
    </li>
    <li>
      Self-development: W3Schools, EnglishClass101, freecodecamp.org, codewars.com, learn.javascript, javascript.info and other. My hand book is MDN Web Docs.
    </li>
  </ul>
</article>
<article id="lang" class="lang">
  <h2>Languages:</h2>
  <ul>
    <li>Russian (native)</li>
    <li>English (B1)</li>
  </ul>
</article>
</template>


<style scoped>
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