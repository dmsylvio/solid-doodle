'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfissaoSchema extends Schema {
  up () {
    this.create('profissaos', (table) => {
      table.increments()
      table.string('profissao').notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('co_seq_usuario')
        .inTable('tb_usuario')
      table.timestamps()
    })
  }

  down () {
    this.drop('profissaos')
  }
}

module.exports = ProfissaoSchema
