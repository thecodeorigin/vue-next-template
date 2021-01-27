import { $dev } from "../../../core/utils/dev";
import { ref } from "vue";
import { clientApi } from "../../../core/services/client";

/**
 * Posts data
 */
const data = ref([]);

/**
 * Fetch all posts
 */
const fetchMany = async () => {
  try {
    const { data } = await clientApi.get("/posts");
    $dev.log("hmm");
    return data;
  } catch (err) {
    $dev.error(err);
  }
};

/**
 * Fetch one post
 */
const fetchOne = async id => {
  try {
    const { data } = await clientApi.get(`/posts/${id}`);
    return data;
  } catch (err) {
    $dev.error(err);
  }
};

/**
 * Delete specific post
 */
const deleteOne = async id => {
  try {
    const { data } = await clientApi.delete(`/posts/${id}`);
    return data;
  } catch (err) {
    $dev.error(err);
  }
};

export default {
  posts: data,
  fetchPosts: fetchMany,
  fetchPost: fetchOne,
  deletePost: deleteOne
};
