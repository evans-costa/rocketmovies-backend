import knex from "../database/knex/index.js"
import AppError from "../utils/AppError.js"
import pkg from "bcryptjs"
const { hash, compare} = pkg;

export class UsersController {
  async create(req, res) {
    const { name, email, password } = req.body

    const [checkUserExists] = await knex("users").where({ email })
    
    if (checkUserExists) {
      throw new AppError ("This user already exists!")
    }

    const hashedPassword = await hash(password, 8)

    await knex("users").insert({
      name,
      email,
      password: hashedPassword
    })

    return res.json()
  }

  async update(req, res) {
    const { id } = req.params
    const { name, email, password, oldPassword } = req.body

    const [user] = await knex("users").where({ id })

    if (!user) {
      throw new AppError ("This user not exists!")
    }

    const [checkUpdatedUser] = await knex("users").where({ email })

    if (checkUpdatedUser && checkUpdatedUser.id !== user.id) {
      throw new AppError("This email is already in use!")
    }

    if (password && !oldPassword) {
      throw new AppError("You need to enter the old password!")
    }

    if (password && oldPassword) {
      const checkOldPassword = await compare(oldPassword, user.password)

      if (!checkOldPassword) {
        throw new AppError("The old password is not correct!")
      }
    }

    user.name = name ?? user.name
    user.email = email ?? user.email
    user.password = await hash(password, 8)

    await knex("users")
      .where({ id })
      .update({
        name: user.name,
        email: user.email,
        password: user.password
      })

    return res.json()
  }
}