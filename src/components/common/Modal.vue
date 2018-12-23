<template>
  <div class="modal-backdrop">
    <section class="modal">
      <header class="modal-header">
        <slot name="header"></slot>
      </header>
      <article class="modal-body">
        <p><slot name="body"></slot></p>
      </article>
      <footer class="modal-footer">
        <slot name="footer"></slot>
        <button @click="$emit.closeModal">Close</button>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name: 'modal'
}
</script>

<style lang="scss">

</style>
