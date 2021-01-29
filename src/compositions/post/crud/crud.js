import qs from "qs";
import { $dev } from "@/core/utils/dev";
import { $clientApi } from "@/core/services/client";

/**
 * Fetch many records
 */
const fetchMany = async (query = { page: 1, limit: 10 }) => {
  try {
    const { data } = await $clientApi.get(`/posts?${qs.stringify(query)}`);
    return data;
  } catch (err) {
    $dev.error(err);
  }
};

/**
 * Fetch one record
 */
const fetchOne = async id => {
  try {
    const { data } = await $clientApi.get(`/posts/${id}`);
    return data;
  } catch (err) {
    $dev.error(err);
  }
};

/**
 * Create one record
 */
const createOne = async form => {
  try {
    const { data } = await $clientApi.post(`/posts`, form);
    return data;
  } catch (err) {
    $dev.error(err);
  }
};

/**
 * Update one record
 */
const updateOne = async (id, form) => {
  try {
    const { data } = await $clientApi.put(`/posts/${id}`, form);
    return data;
  } catch (err) {
    $dev.error(err);
  }
};

/**
 * Delete specific record
 */
const deleteOne = async id => {
  try {
    const { data } = await $clientApi.delete(`/posts/${id}`);
    return data;
  } catch (err) {
    $dev.error(err);
  }
};

export default {
  /**
   * Fetch all posts
   */
  fetchPosts: fetchMany,
  /**
   * Fetch one post
   */
  fetchPost: fetchOne,
  /**
   * Create one post
   */
  createPost: createOne,
  /**
   * Update one post
   */
  updatePost: updateOne,
  /**
   * Delete one post
   */
  deletePost: deleteOne
};
