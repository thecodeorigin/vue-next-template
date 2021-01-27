<template>
  <div></div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import usePost from "../use/post";
import useAuthor from "../use/author";

export default defineComponent({
  components: {
    // ExampleComponent,
  },
  setup() {
    // Post module
    const { posts, fetchPosts, deletePosts } = usePost;
    const { authors, fetchAuthors, banAuthors } = useAuthor;

    onMounted(async () => {
      // posts.value = await fetchPosts()
      // authors.value = await fetchAuthors()
    });

    return {
      posts,
      authors,
      fetchPosts,
      deletePosts,
      fetchAuthors,
      banAuthors
    };
  },
  created() {
    console.log(process.env.NODE_ENV);
    console.log("Created");
  },
  mounted() {
    console.log("Mounted");
  }
});
</script>
