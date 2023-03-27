import knex from "../database/knex/index.js"
import AppError from "../utils/AppError.js"

export class MovieNotesController {
  async index(req, res) {
    const { user_id, title, tags } = req.query
    let movieNotes

    if (tags) {
      const filteredTags = tags.split(",").map(tag => tag.trim())
      
      movieNotes = await knex("movie_tags")
        .select([
          "movie_notes.id", 
          "movie_notes.title",
          "movie_notes.description",
          "movie_notes.rating",
          "movie_notes.user_id",
        ])
        .where("movie_notes.user_id", user_id)
        .whereLike("movie_notes.title", `%${title}%`)
        .whereIn("movie_tags.name", filteredTags)
        .innerJoin("movie_notes", "movie_notes.id", "movie_tags.note_id")
        .orderBy("movie_notes.title")
    } else {
      movieNotes = await knex("movie_notes")
        .where({ user_id })
        .whereLike("title", `%${title}%`)
        .orderBy("title")
    }

    const userTags = await knex("movie_tags").where({ user_id })
    const movieNotesWithTags = movieNotes.map(movieNote => {
      const movieTags = userTags.filter(tag => tag.note_id === movieNote.id)

      return {
        ...movieNote,
        tags: movieTags
      }
    })

    return res.json(movieNotesWithTags)
  }
  
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