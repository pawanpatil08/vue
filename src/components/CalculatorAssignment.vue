<template>
  <div class="row">
    <div class="col-sm-6 offset-sm-3">
      <form class="justify-content-center" @submit.prevent="calculate()">
        <fieldset>
          <legend class="text-center">Calculator Assignment</legend>
          <div class="form-group">
            <label htmlFor="t1">Number One</label>
            <input type="number" class="form-control" v-model.number="num1" />
          </div>
          <div class="form-group">
            <label htmlFor="t2">Number Two</label>
            <input type="number" class="form-control" v-model.number="num2" />
          </div>
          <div class="form-group">
            <h3>Result: {{ result }}</h3>
          </div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-success btn-block"
             
            >
              Add
            </button>
            <button
              type="reset"
              class="btn btn-primary btn-block"
              v-on:click="reset()"
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
export default {
  name: "CalculatorAssignment",
  data: function () {
    return {
      result: 0,
      num1: 0,
      num2: 0,
    };
  },
  methods: {
    calculate() {
      this.result = this.num1 + this.num2;
    },
    reset() {
      this.num1 = 0;
      this.num2 = 0;
      this.result = 0;
    },
  },
};
</script>