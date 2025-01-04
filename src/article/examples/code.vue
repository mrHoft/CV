<template>
  <pre class="code">
  <span style="color: #339933;">// Code examles:</span>
  &nbsp;
  <span style="color: #378dd6; font-weight: bold;">function</span> createPhoneNumber<span style="color: #8655d6;">&#40;</span>numbers<span style="color: #8655d6;">&#41;</span> <span style="color: #8655d6;">&#123;</span>
    <span style="color: #378dd6; font-weight: bold;">return</span> numbers.<span style="color: #92923d;">reduce</span><span style="color: #8655d6;">&#40;</span><span style="color: #8655d6;">&#40;</span>acc<span style="color: #339933;">,</span> n<span style="color: #8655d6;">&#41;</span> <span style="color: #339933;">=&gt;</span> acc.<span style="color: #92923d;">replace</span><span style="color: #8655d6;">&#40;</span><span style="color: #ce834a;">'x'</span><span style="color: #339933;">,</span> n<span style="color: #8655d6;">&#41;</span><span style="color: #339933;">,</span> <span style="color: #ce834a;">'(xxx) xxx-xxxx'</span><span style="color: #8655d6;">&#41;</span>
  <span style="color: #8655d6;">&#125;</span>
  &nbsp;
  <span style="color: #378dd6; font-weight: bold;">function</span> permutations<span style="color: #8655d6;">&#40;</span>str<span style="color: #8655d6;">&#41;</span> <span style="color: #8655d6;">&#123;</span>
    <span style="color: #378dd6; font-weight: bold;">return</span> str.<span style="color: #92923d;">length</span> <span style="color: #339933;">&lt;=</span> <span style="color: #CC0000;">1</span> <span style="color: #339933;">?</span> <span style="color: #8655d6;">&#91;</span>str<span style="color: #8655d6;">&#93;</span> <span style="color: #339933;">:</span> <span style="">Array</span>.<span style="color: #92923d;">from</span><span style="color: #8655d6;">&#40;</span>
      <span style="color: #378dd6; font-weight: bold;">new</span> Set<span style="color: #8655d6;">&#40;</span>str.<span style="color: #92923d;">split</span><span style="color: #8655d6;">&#40;</span><span style="color: #ce834a;">''</span><span style="color: #8655d6;">&#41;</span>
        .<span style="color:#92923d;">map</span><span style="color: #8655d6;">&#40;</span><span style="color: #8655d6;">&#40;</span><span style="color: #9cdcf1;">char</span><span style="color: #339933;">,</span> i<span style="color: #8655d6;">&#41;</span> <span style="color: #339933;">=&gt;</span> permutations<span style="color: #8655d6;">&#40;</span>str.<span style="color: #92923d;">substr</span><span style="color: #8655d6;">&#40;</span><span style="color: #CC0000;">0</span><span style="color: #339933;">,</span> i<span style="color: #8655d6;">&#41;</span> <span style="color: #339933;">+</span> str.<span style="color: #92923d;">substr</span><span style="color: #8655d6;">&#40;</span>i <span style="color: #339933;">+</span> <span style="color: #CC0000;">1</span><span style="color: #8655d6;">&#41;</span><span style="color: #8655d6;">&#41;</span>
          .<span style="color: #92923d;">map</span><span style="color: #8655d6;">&#40;</span>p <span style="color: #339933;">=&gt;</span> <span style="color: #9cdcf1;">char</span> <span style="color: #339933;">+</span> p<span style="color: #8655d6;">&#41;</span>
        <span style="color: #8655d6;">&#41;</span>
        .<span style="color: #92923d;">reduce</span><span style="color: #8655d6;">&#40;</span><span style="color: #8655d6;">&#40;</span>acc<span style="color: #339933;">,</span> val<span style="color: #8655d6;">&#41;</span> <span style="color: #339933;">=&gt;</span> acc.<span style="color: #92923d;">concat</span><span style="color: #8655d6;">&#40;</span>val<span style="color: #8655d6;">&#41;</span><span style="color: #339933;">,</span> <span style="color: #8655d6;">&#91;</span><span style="color: #8655d6;">&#93;</span><span style="color: #8655d6;">&#41;</span>
      <span style="color: #8655d6;">&#41;</span>
    <span style="color: #8655d6;">&#41;</span>
  <span style="color: #8655d6;">&#125;</span>
  </pre>
</template>

<style scoped>
.code {
  position: relative;
  background-color: var(--color10);
  margin: 0;
  padding: 0.5rem;
  line-height: 125%;
  border-radius: 0.5rem;
}
.code:before {
  color: #888;
  content: 'Code';
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 0.5em;
  position: absolute;
  text-transform: uppercase;
  top: 0;
  right: 0;
}
</style>
