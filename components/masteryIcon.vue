<template>
  <span>
    <img
      v-if="region === 'Heart of Thorns' || region === 'Maguuma'"
      src="~/static/mp_hot.png"
      :height="height"
    />
    <img
      v-if="region === 'Central Tyria' || region === 'Tyria'"
      src="~/static/mp_tyria.png"
      :height="height"
    />
    <img
      v-if="region === 'Path of Fire' || region === 'Desert'"
      src="~/static/mp_pof.png"
      :height="height"
    />
    <img
      v-if="region === 'Icebrood Saga' || region === 'Tundra'"
      src="~/static/mp_is.png"
      :height="height"
    />
    <img
      v-if="region === 'End of Dragons' || region === 'Jade'"
      src="~/static/mp_eof.png"
      :height="height"
    />
    <img
      v-if="region === 'Secrets of the Obscure' || region === 'Sky'"
      src="~/static/mp_soto.png"
      :height="height"
    />
    <img
      v-if="region === 'Janthir Wilds' || region === 'Wild'"
      src="~/static/mp_jw.png"
      :height="height"
    />
    <img
      v-if="region === 'Visions of Eternity' || region === 'Magic'"
      src="~/static/mp_voe.png"
      :height="height"
    />
  </span>
</template>

<script>
export default {
  name: 'MasteryIcon',
  props: {
    region: {
      type: String,
      default: 'Central Tyria',
    },
    height: {
      type: Number,
      default: 20,
    },
  },
}
</script>

<style scoped>
img {
  vertical-align: text-bottom;
}
</style>
