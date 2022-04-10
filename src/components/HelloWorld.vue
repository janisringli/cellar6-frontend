<template>
  <div class="hello">

    <div v-for="person in persons" :key="person.personID">
      <h1>{{ person.firstName }} {{ person.lastName }}</h1>
      <p>Has id: {{ person.personID }}</p>
    </div>

  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'HelloWorld',
  data: () => ({
    persons: []
  }),
  beforeMount() {
    api.get('/person').then((res) => {
      this.persons = res.data;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
