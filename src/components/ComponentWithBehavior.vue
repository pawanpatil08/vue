<template>
  <div>
    <h1 class="text-primary">Component With Behavior</h1>
    <h2 class="text-info">Id: {{ id }}</h2>
    <h2 class="text-info">Count: {{ count }}</h2>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary btn-block" v-on:click="changeCount1">
          Click
        </button>
      </div>
      <div class="col">
        <button class="btn btn-primary btn-block" @click="changeCount2">
          Click
        </button>
      </div>
    </div>
    <hr />

    <!-- <h2>Props Area</h2>
		<h2 class="text-info">Name: {{ name }}</h2>
		<h2 class="text-info">Address: {{ address }}</h2>
		<h2>Data(State) Area</h2>
		<h2 class="text-info">Name: {{ sname }}</h2>
		<h2 class="text-info">Address: {{ saddress }}</h2> -->
    <div class="row">
      <div class="col">
        <button class="btn btn-primary btn-block" @click="handleChange">
          Click to Change
        </button>
      </div>
      <div class="col">
        <button class="btn btn-primary btn-block" @click="handleChange()">
          Click to Change
        </button>
      </div>
      <div class="col">
        <button class="btn btn-primary btn-block" @click="handleChange('Test')">
          Click to Change
        </button>
      </div>
    </div>
    <h2>Event Object and Passing Arguments</h2>
    <div class="row">
      <div class="col">
        <a href="#" @click="handleClick('Hello from template')">Click Me</a>
      </div>
      <div class="col">
        <a
          href="https://www.google.com"
          @click="handleClick('Hello from template')"
          >Click Me</a
        >
      </div>
      <div class="col">
        <a href="https://www.google.com" @click="anchorClick1">Click Me</a>
      </div>
      <div class="col">
        <a href="https://www.google.com" @click="anchorClick1($event)"
          >Click Me</a
        >
      </div>
      <div class="col">
        <a
          href="https://www.google.com"
          @click="anchorClick2('Hello from template', $event)"
          >Click Me</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentWithBehavior",
  data: function () {
    return {
      id: 1,
      count: 0,
      sname: this.name,
      saddress: { ...this.address },
    };
  },
  props: {
    name: {
      type: String,
      default: "No Name",
    },
    address: {
      type: Object,
      require: true,
    },
  },
  methods: {
    changeCount1() {
      this.count += 1;
    },
    changeCount2: function () {
      this.count += 1;
    },
    handleChange: function (msg) {
      // Props should be treated as readonly
      // Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
      // Instead, use a data or computed property based on the prop's value.
      // this.name = "Abhijeet";
      // this.address.city = "Mumbai";

      // Always Change or Modify State (data())
      console.log(msg);
    },
    anchorClick1(e) {
      console.log("Hello from Anchor Click One");
      e.preventDefault();
    },
    anchorClick2(msg, e) {
      console.log("Hello from Anchor Click Two");
      console.log("msg: ", msg);
      e.preventDefault();
    },
  },
};
</script>