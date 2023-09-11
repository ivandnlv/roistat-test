<template>
  <div class="overlay" @click="(e) => onOverlayClick(e)">
    <div class="modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeModal: {
      type: Function,
      required: true,
    },
  },
  methods: {
    onOverlayClick(e) {
      if (e.target.classList.contains('overlay')) {
        this.closeModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
.modal {
  margin: 0 auto;
  width: 600px;
  padding: 20px 0;
  border-radius: 10px;
  background: #fff;
}
</style>
