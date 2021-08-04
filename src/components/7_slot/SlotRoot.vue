<template>
  <div>
    <!-- <Frame />
		<Frame></Frame>
		<Frame>
			<img src="../../assets/logo.png" />
		</Frame> -->

    <titled-frame>
      <template v-slot:title> Vue JS </template>
      <img src="../../assets/logo.png" />
    </titled-frame>
    
    <List :items="employees">
      <div slot-scope="row" class="list-group-item">
        <span class="badge badge-primary">
          {{ row.item.id }}
        </span>
        {{ row.item.name }}
        <i class="bi bi-person"></i>
      </div>
    </List>
  </div>
</template>


<script>
/* eslint-disable */

import Frame from "./Frame.vue";
import List from "./List.vue";
import TitledFrame from "./TitledFrame.vue";
export default {
  components: { Frame, TitledFrame, List },
  name: "SlotRoot",
  data: function () {
    return {
      employees: [
        { id: 1, name: "Manish" },
        { id: 2, name: "Abhijeet" },
        { id: 3, name: "Ramakant" },
        { id: 4, name: "Subodh" },
      ],
    };
  },
};
</script>