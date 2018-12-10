<template>
  <article class="edit-file">
    <h2>
      <LiveEdit
        v-model="file.title"
        :editable="isEditable"
        :multiline="true"
      ></LiveEdit>
    </h2>
    <LiveEdit v-if="isEditable"
      v-model="file.description"
      :editable="isEditable"
      :multiline="true"
    ></LiveEdit>
  </article>
</template>

<script>
export default {
  data () {
    return {
      isEditable: true
    }
  }
}
</script>
