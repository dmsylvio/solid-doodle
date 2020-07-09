'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpregosSchema extends Schema {
  up () {
    this.table('empregos', (table) => {
      table
        .integer('curso_id')
        .unsigned()
        .unique()
        .references('id')
        .inTable('cursos')
    })
  }

  down () {
    this.table('empregos', (table) => {
      // reverse alternations
    })
  }
}

module.exports = EmpregosSchema
