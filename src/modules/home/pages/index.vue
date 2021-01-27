<template>
  <div></div>
</template>
<script>
import { defineComponent, onMounted, onUnmounted, onUpdated } from "vue";
import usePost from "@/modules/post/use";
import useAuthor from "@/modules/author/use";

export default defineComponent({
  components: {
    // ExampleComponent,
  },
  setup() {
    onMounted(() => {
      usePost.mounted();
      useAuthor.mounted();
    });
    onUpdated(() => {
      usePost.updated();
      useAuthor.updated();
    });
    onUnmounted(() => {
      usePost.unmounted();
      useAuthor.unmounted();
    });
    return {
      ...usePost,
      ...useAuthor
    };
  },
  async created() {
    await this.fetchPosts();
    // this.posts = await this.fetchPosts();
  },
  mounted() {
    console.log("Mounted");
  }
});
</script>
