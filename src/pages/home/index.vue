<template>
  <div>
    {{ $t('home.description') }}
    <form>
      <input
        v-validate:focus.min_length:10.required="validateHandler"
        type="text"
        v-model="something"
        placeholder="Type something"
        class="bg-gray-100 p-2 rounded-lg shadow-sm"
      />
    </form>
    <span
      v-for="error in errors"
      :key="error"
      class="font-bold text-danger block"
    >
      {{ $t(error.message) }}{{ error.arg }}
    </span>
  </div>
</template>
<script>
import { defineComponent, onMounted, onUnmounted, onUpdated } from 'vue'
import usePost from '@/use/post/crud'
import useAuthor from '@/use/author/crud'

export default defineComponent({
  components: {
    // ExampleComponent,
  },
  setup() {
    onMounted(() => {
      usePost.mounted()
      useAuthor.mounted()
    })
    onUpdated(() => {
      usePost.updated()
      useAuthor.updated()
    })
    onUnmounted(() => {
      usePost.unmounted()
      useAuthor.unmounted()
    })
    return {
      ...usePost,
      ...useAuthor,
    }
  },
  data() {
    return {
      something: null,
      errors: [],
    }
  },
  methods: {
    validateHandler(errors) {
      this.errors = errors
    },
  },
  async created() {
    await this.fetchPosts()
    // this.posts = await this.fetchPosts();
  },
  mounted() {
    console.log('Mounted')
  },
})
</script>
