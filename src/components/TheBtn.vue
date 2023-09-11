<template>
  <button class="btn" @click="onClick"><slot></slot></button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$btn-color: rgb(227, 58, 58);
.btn {
  cursor: pointer;
  display: block;
  font-size: 0.9em;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 5px;
  background: $btn-color;
  color: #fff;
  border: none;
  margin: 20px auto 0 auto;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: lighten($btn-color, 10%);
  }
  &:active {
    background: darken($btn-color, 10%);
  }
}
</style>
