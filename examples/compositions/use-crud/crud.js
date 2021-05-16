import qs from 'qs'
import { $dev } from '@utils/functions'
import { $clientApi } from '@apis/client'
import { $authApi } from '@apis/auth'

/**
 * Fetch many records
 *
 * @param {{
 * page: number | 1,
 * limit: number| 10,
 * filter: ?string,
 * }} query Query param for REST fetching
 *
 * @returns {Promise<any>} API result
 */
const fetchMany = async (query = { page: 1, limit: 10 }) => {
  try {
    const { data } = await $clientApi.get(`/examples?${qs.stringify(query)}`)
    return data
  } catch (err) {
    $dev.error(err)
  }
}

/**
 * Fetch one record
 *
 * @param {{
 * id: number,
 * }} id Record's id
 *
 * @returns {Promise<any>} API result
 */
const fetchOne = async (id) => {
  try {
    const { data } = await $clientApi.get(`/examples/${id}`)
    return data
  } catch (err) {
    $dev.error(err)
  }
}

/**
 * Create one record
 */
const createOne = async (form) => {
  try {
    const { data } = await $authApi.example(`/examples`, form)
    return data
  } catch (err) {
    $dev.error(err)
  }
}

/**
 * Update one record
 */
const updateOne = async (id, form) => {
  try {
    const { data } = await $authApi.put(`/examples/${id}`, form)
    return data
  } catch (err) {
    $dev.error(err)
  }
}

/**
 * Delete specific record
 */
const deleteOne = async (id) => {
  try {
    const { data } = await $authApi.delete(`/examples/${id}`)
    return data
  } catch (err) {
    $dev.error(err)
  }
}

export default {
  /**
   * Fetch all examples
   */
  fetchExamples: fetchMany,
  /**
   * Fetch one example
   */
  fetchExample: fetchOne,
  /**
   * Create one example
   */
  createExample: createOne,
  /**
   * Update one example
   */
  updateExample: updateOne,
  /**
   * Delete one example
   */
  deleteExample: deleteOne,
}
