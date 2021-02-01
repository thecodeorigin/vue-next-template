import { ref } from 'vue'

/**
 * Stored records
 */
const data = ref([])

/**
 * Query for fetching records
 */
const query = ref({
  page: 0,
  limit: 10,
})

export default {
  /**
   * Posts data
   */
  posts: data,
  /**
   * Query for fetching posts
   */
  postsQuery: query,
}
