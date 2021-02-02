import qs from 'qs'
import { $dev } from '@utils/functions'
import { $clientApi } from '@services/client'

/**
 * Fetch many records
 */
const fetchMany = async (query) => {
  try {
    const { data } = await $clientApi.get(`/authors?${qs.stringify(query)}`)
    return data
  } catch (err) {
    $dev.error(err)
  }
}

/**
 * Fetch one record
 */
const fetchOne = async (id) => {
  try {
    const { data } = await $clientApi.get(`/authors/${id}`)
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
    const { data } = await $clientApi.post('/authors', form)
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
    const { data } = await $clientApi.put(`/authors/${id}`, form)
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
    const { data } = await $clientApi.delete(`/authors/${id}`)
    return data
  } catch (err) {
    $dev.error(err)
  }
}

export default {
  /**
   * Fetch all authors
   */
  fetchAuthors: fetchMany,
  /**
   * Fetch one author
   */
  fetchAuthor: fetchOne,
  /**
   * Create one author
   */
  createAuthor: createOne,
  /**
   * Update one author
   */
  updateAuthor: updateOne,
  /**
   * Delete one author
   */
  deleteAuthor: deleteOne,
}
