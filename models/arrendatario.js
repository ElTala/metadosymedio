'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arrendatario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Arrendatario.init({
    personaId: DataTypes.NUMBER,
    propiedadId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Arrendatario',
  });
  return Arrendatario;
};