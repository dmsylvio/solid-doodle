'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('tb_usuario', (table) => {
      table.increments('co_seq_usuario')
      table.integer('co_empresa', 11).nullable()
      table.integer('co_instituicao', 11).nullable()
      table.integer('co_estudante', 11).nullable()
      table.integer('co_empregado', 11).nullable()
      table
        .string('tp_permissao', 1)
        .notNullable()
        .defaultTo('')
      table.string('ds_login', 80).notNullable()
      table
        .string('image', 255)
        .notNullable()
        .defaultTo('@web/uploads/default/deafault.jpg')
      table.string('auth_key', 32).notNullable()
      table.string('ds_senha', 255).notNullable()
      table
        .string('password_reset_token', 255)
        .defaultTo('NULL')
      table.string('email', 254).notNullable()
      table
        .integer('status', 6)
        .notNullable()
        .defaultTo('10')
      table.string('verification_token', 255).defaultTo('NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('tb_usuario')
  }
}

module.exports = UserSchema
