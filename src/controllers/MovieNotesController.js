import knex from "../database/knex/index.js"
import AppError from "../utils/AppError.js"

export class MovieNotesController {
  async create(req, res) {
    const { user_id } = req.params
    const { title, description, rating, tags } = req.body

    const [note_id] = await knex("movie_notes").insert({
      title, 
      description,
      rating,
      user_id
    })

    const movieTagsInsert = tags.map(name => {
      return {
        note_id,
        user_id,
        name,
      }
    })

    await knex("movie_tags").insert(movieTagsInsert)

    return res.json()
  }

  async show(req, res) {
    const { id } = req.params

    const movie_note = await knex("movie_notes").where({ id }).first()
    const movie_tags = await knex("movie_tags").where({ note_id : id }).orderBy("name")

    return res.json({
      ...movie_note,
      movie_tags
    })
  }

  async delete(req, res) {
    const { id } = req.params

    await knex("movie_notes")
      .where({ id })
      .delete()

    return res.json()
  }
}