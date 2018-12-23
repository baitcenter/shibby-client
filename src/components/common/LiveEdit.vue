<template>
  <div>
    <template v-if="editable" >
      <textarea v-if="multiline" class="live-edit" type="text" v-model="modelvalue" :placeholder="placeholder"></textarea>
      <input v-else class="live-edit" type="text" v-model="modelvalue" :placeholder="placeholder">
    </template>
    <span v-else>{{ modelvalue || placeholder }}</span>
  </div>
</template>
<script>
export default {
  name: 'LiveEdit',
  props: {
    value: {
      type: [String, Object],
      required: true
    },
    editable: {
      type: Boolean,
      required: true
    },
    multiline: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    }
  },
  data () {
    return {
      modelvalue: this.value
    }
  },
  watch: {
    modelvalue: (val) => {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>
  .live-edit {
    height: auto;
    display: block;
    font-size: 1em !important;
    background: transparent;
    color: inherit;
    border: none
  }
</style>
