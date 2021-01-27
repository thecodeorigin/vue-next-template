import { ref } from "vue";

/**
 * Stored records
 */
const data = ref([]);

/**
 * Query for fetching records
 */
const query = ref({
  page: 0,
  limit: 10
});

export default {
  /**
   * Foos data
   */
  foos: data,
  /**
   * Query for fetching foos
   */
  foosQuery: query
};
