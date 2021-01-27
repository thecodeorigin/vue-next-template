import qs from "qs";
import { $dev } from "@/core/utils/dev";
import { $clientApi } from "@/core/services/client";

/**
 * Fetch many records
 */
const fetchMany = async query => {
  try {
    const { data } = await $clientApi.get(`/foos?${qs.stringify(query)}`);
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
    const { data } = await $clientApi.get(`/foos/${id}`);
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
    const { data } = await $clientApi.post(`/foos`, form);
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
    const { data } = await $clientApi.put(`/foos/${id}`, form);
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
    const { data } = await $clientApi.delete(`/foos/${id}`);
    return data;
  } catch (err) {
    $dev.error(err);
  }
};

export default {
  /**
   * Fetch all foos
   */
  fetchFoos: fetchMany,
  /**
   * Fetch one foo
   */
  fetchFoo: fetchOne,
  /**
   * Create one foo
   */
  createFoo: createOne,
  /**
   * Update one foo
   */
  updateFoo: updateOne,
  /**
   * Delete one foo
   */
  deleteFoo: deleteOne
};
