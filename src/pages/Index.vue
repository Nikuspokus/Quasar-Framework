<template>
  <q-page padding>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: ['Aller au magasin', 'Acheter des bannanes', ' acheter despommes']
    }
  }
};
</script>

<style></style>
