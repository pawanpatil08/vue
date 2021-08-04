<template>
  <div>
    <counter />
    <br />
    <counter :interval="10" />

    <h2 class="text-success text-center">Calling Child Method from Parent</h2>
    <br />
    <counter :interval="10" ref="c1" />
    <br />
    <br />
    <div class="text-center">
      <button class="btn btn-warning btn-block" @click="p_reset">
        Parent Reset
      </button>
    </div>
    <div>
      <h2 class="text-success text-center">Calling Parent Method from Child</h2>
      <h2 class="text-danger text-center">
        Passing Parent Method Reference to Child - Anti Pattern
      </h2>
      <br />
      <h3 class="alert alert-danger" v-if="message">{{ message }}</h3>
      <br />
      <counter :interval="10" ref="c1" :onMax="updateMessage" />
      <br />
      <br />
      <div class="text-center">
        <button class="btn btn-warning btn-block" @click="p_reset">
          Parent Reset
        </button>
      </div>
    </div>
    <hr />
    <div>
      <h2 class="text-success text-center">Notify Parent from Child</h2>
      <h2 class="text-info text-center">
        Child to Parent Communication via Events
        <br />
        Vue components have a $emit() function that allows you to pass custom
        events up the component tree.
      </h2>
      <br />
      <h3 class="alert alert-danger" v-if="message">{{ message }}</h3>
      <br />
      <counter :interval="10" ref="c2" v-on:flag-changed="handleFlagChanged" />
      <br />
      <counter :interval="10" ref="c1" @flag-changed="handleFlagChanged" />
      <br />
      <br />
      <div class="text-center">
        <button class="btn btn-warning btn-block" @click="p_reset">
          Parent Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";
export default {
  components: { Counter },
  name: "CounterAssignment",
  data: function () {
    return {
      message: "",
    };
  },
  methods: {
    updateMessage(flag) {
      if (flag)
        this.message =
          "Max Click Reached, please click 'reset button' to restart";
      else this.message = "";
    },
    handleFlagChanged(flag) {
      if (flag)
        this.message =
          "Max Click Reached, please click 'reset button' to restart";
      else this.message = "";
    },
    p_reset() {
      // console.log(this.$refs);
      this.$refs.c1.reset();
      this.$refs.c2.reset();
    },
  },
};
</script>