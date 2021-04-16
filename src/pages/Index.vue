<template>
  <q-page padding>
    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <div>{{ task.name }} {{ index }}</div>
        <small>{{ task.date }} @ {{ task.heure }}</small>
        <button @click="deleteTask(index)">X</button>
      </li>
    </ul>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          name: "Aller au magasin",
          date: "16/04/2021",
          heure: "18:30"
        },
        {
          name: "Acheter des bannanes",
          date: "18/04/2021",
          heure: "09:30"
        },
        {
          name: "acheter des pommes",
          date: "17/04/2021",
          heure: "09:31"
        }
      ]
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style></style>
