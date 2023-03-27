import knex from "../database/knex/index.js"

export class MovieTagsController {
  async index(req, res) {
    const { user_id } = req.params

    const movie_tags = await knex("movie_tags")
      .where({ user_id })
      .orderBy("name")
    
    return res.json(movie_tags)
  }
}