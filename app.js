const models = require('./models');

const consultaPropiedades = async () => {
    r = await models.Propiedad.findAll();
    await r.forEach(p => {
        console.log(p.dataValues);
    });
    models.sequelize.close();
}

const agregaPropietarios = async () => {
    const prop = await models.Propiedad.findByPk(1);
    //console.log(prop.dataValues);
    const per1 = await models.Persona.findByPk(1);
    const per2 = await models.Persona.findByPk(3);
    //console.log(per.dataValues)
    await prop.addPropietarios([per1,per2]);
    const propietarios = await prop.getPropietarios();
    await propietarios.forEach(p => {
        console.log(p.nombre);
    });
    models.sequelize.close();
}
const agregaArrendatarios = async () => {
    const prop = await models.Propiedad.findByPk(1);
    //console.log(prop.dataValues);
    const per2 = await models.Persona.findByPk(1);
    //console.log(per.dataValues)
    await prop.addArrendatarios([per2]);
}


agregaPropietarios();
agregaArrendatarios();