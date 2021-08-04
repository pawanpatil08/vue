<template>
  <div class="row">
    <div class="col-sm-6 offset-sm-3">
      <form class="justify-content-center" @submit.prevent="addEmployee()">
        <fieldset>
          <legend class="text-center">Add Employee Information</legend>
          <div class="form-group">
            <label htmlFor="t1">Id</label>
            <input type="number" class="form-control" v-model.number="emp.id" />
          </div>
          <div class="form-group">
            <label htmlFor="t2">Name</label>
            <input type="text" class="form-control" v-model="emp.name" />
          </div>
          <div class="form-group">
            <label htmlFor="t2">Desgnation</label>
            <input type="text" class="form-control" v-model="emp.desc" />
          </div>
          <div class="form-group">
            <label htmlFor="t2">Salary</label>
            <input type="text" class="form-control" v-model="emp.salary" />
          </div>

          <div class="form-group row d-flex justify-content-around">
            <button type="submit" class="btn btn-success">Add</button>
            <button
              type="reset"
              class="btn btn-primary"
            >
              Reset
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import EventBus from "./EventBus";
    export default {
         name: "regform",
         data: function () {
             return {
               allEmployee:[],
                emp:{
                   id: 0,
                 name:'',
                 desc:'',
                 salary:''
                }
             }
         },
         methods: {
           addEmployee() {
            this.allEmployee.push(this.emp);
            EventBus.$emit("employee-data", this.allEmployee);
           }
         },
    }
</script>

<style lang="scss" scoped>
button{
  width: 40%;
  display: flex;
}
</style>