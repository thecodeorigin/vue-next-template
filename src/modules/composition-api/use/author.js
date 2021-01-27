import { ref } from "vue";

/**
 * Authors data
 */
const authors = ref([]);

/**
 * Fetch the authors
 */
const fetchAuthors = () => {
  /** Fetch the authors */ console.log("Fetch authors");
};

/**
 * Ban specific author
 */
const banAuthor = id => {
  /** Fetch the posts */ console.log("Ban the author " + id);
};

export default {
  authors,
  fetchAuthors,
  banAuthor
};
