<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">body</th>
            <th scope="col">userId</th>
            <th scope="col">title</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id" highlight>
            <th scope="row">{{ post.id }}</th>
            <td>{{ post.body }}</td>
            <td>{{ post.userId }}</td>
            <td>{{ post.title }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        name:"postTable",
        props: {
			posts: {
				type: Array,
			}
		},
    }
</script>