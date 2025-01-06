<template>
  <div :class="$style.mirror"></div>
</template>

<style module>
.mirror {
  flex: 0 0 5rem;
}

@media (max-width: 640px) {
  .mirror {
    display: none;
  }
}
</style>
