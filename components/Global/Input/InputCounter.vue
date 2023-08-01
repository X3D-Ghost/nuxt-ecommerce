<script setup lang="ts">
const props = defineProps({
  label: String,
  id: String,
  name: String,
  value: {
    type: [Number, String],
    default: 0,
  },
});
const emit = defineEmits(["input", "change"]);

let val = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit("change", parseInt(value));
  },
});
const inc = () => {
  emit("change", props.value + 1);
};
const dec = () => {
  emit("change", props.value - 1);
};
</script>

<template>
  <div class="input-group quantity me-3" style="width: 130px">
    <div class="input-group-btn">
      <button class="btn btn-primary btn-minus" @click="dec">
        <Icon icon="fa-solid fa-minus"></Icon>
      </button>
    </div>
    <input
      type="text"
      class="form-control bg-secondary border-0 text-center"
      v-model.number="val"
    />
    <div class="input-group-btn">
      <button class="btn btn-primary btn-plus" @click="inc">
        <Icon icon="fa-solid fa-plus"></Icon>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
