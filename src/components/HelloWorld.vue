<template>
  <div class="hello">
    <div v-for="person in persons" :key="person.personId">
      <h1>{{ person.firstName }} {{ person.lastName }}</h1>
      <p>Has id: {{ person.personId }}</p>
    </div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "HelloWorld",
  data: () => ({
    persons: [],
  }),
  //api call gets stored in data person[]
  beforeMount() {
    api.get("/person").then((res) => {
      this.persons = res.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
