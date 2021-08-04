<template>
  <div>
    <div class="row">
      <h2 class="text-info text-center" v-if="message">{{ message }}</h2>
    </div>
    <div class="pt-5 pb-5" v-if="loading">
      <loader-animation />
    </div>
    <div class="row">
      <!-- <ul class="list-group">
				<li class="list-group-item" v-for="post in posts" :key="post.id">
					<h3>{{ post.id }}</h3>
					<h3>{{ post.title }}</h3>
					<h3>{{ post.body }}</h3>
				</li>
			</ul> -->
<post-table :posts="posts"/>

    </div>
  </div>
</template>

<script>
import postApiClient from "../../service/api-service";
import LoaderAnimation from "./LoaderAnimation.vue";
import PostTable from './postTable.vue';
export default {
  components: { LoaderAnimation, PostTable },
  name: "AjaxComponent",
  data: function () {
    return {
      loading: true,
      posts: [],
      message: "Loading Data, please wait...",
    };
  },
  created() {
    postApiClient
      .getAllPosts()
      .then((result) => {
        this.message = "";
        this.loading = false;
        this.posts = result;
      })
      .catch((eMsg) => {
        this.message = eMsg;
        this.loading = false;
      });
  },
};
</script>