<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Desgnation</th>
          <th scope="col">Salary</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in allEmplyee" v-bind:key="employee.id">
          <th scope="row">{{ employee.id }}</th>
          <td>{{ employee.name }}</td>
          <td>{{ employee.desc }}</td>
          <td>{{ employee.salary }}</td>
          <td><a class="text-success">Details</a></td>
          <td><a class="text-warning" @click="edit">Edit</a></td>
          <td>
            <a class="text-danger" @click="deleteRecord(employee.id)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import EventBus from "./EventBus";

export default {
  name: "emptable",
  data: function () {
    return {
      allEmplyee: [],
    };
  },
  methods: {
    deleteRecord(id) {
      this.allEmplyee = this.allEmplyee.filter((item) => item.id !== id);
    },
    edit() {},
  },
  mounted: function () {
    EventBus.$on("employee-data", (input) => {
      this.allEmplyee = input;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>