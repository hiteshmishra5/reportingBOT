// SQL
const { Sequelize } = require("sequelize");
const ggoData = require("../migration/ggo.json");
const consolidationData = require("../migration/consolidation.json");
const fibrosisData = require("../migration/fibrosis.json");
const mediastinalData = require("../migration/mediastinal.json");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database/report.sqlite",
});

//model
const Ggo = sequelize.define("ggo", {
  rul: Sequelize.BOOLEAN,
  rml: Sequelize.BOOLEAN,
  rll: Sequelize.BOOLEAN,
  lul: Sequelize.BOOLEAN,
  lll: Sequelize.BOOLEAN,
  text: Sequelize.TEXT,
});

const Consolidation = sequelize.define("consolidation", {
  rul: Sequelize.BOOLEAN,
  rml: Sequelize.BOOLEAN,
  rll: Sequelize.BOOLEAN,
  lul: Sequelize.BOOLEAN,
  lll: Sequelize.BOOLEAN,
  text: Sequelize.TEXT,
});

const Fibrosis = sequelize.define("fibrosis", {
  rul: Sequelize.BOOLEAN,
  rml: Sequelize.BOOLEAN,
  rll: Sequelize.BOOLEAN,
  lul: Sequelize.BOOLEAN,
  lll: Sequelize.BOOLEAN,
  text: Sequelize.TEXT,
});

const Mediastinal = sequelize.define("mediastinal", {
  pretracheal: Sequelize.BOOLEAN,
  paratracheal: Sequelize.BOOLEAN,
  precarinal: Sequelize.BOOLEAN,
  subcarinal: Sequelize.BOOLEAN,
  prevascular: Sequelize.BOOLEAN,
  text: Sequelize.TEXT,
});

const init = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: true });
    console.log(`Database & tables created!`);
    Ggo.bulkCreate(ggoData);
    Consolidation.bulkCreate(consolidationData);
    Fibrosis.bulkCreate(fibrosisData);
    Mediastinal.bulkCreate(mediastinalData);
    console.log(`GGO data inserted ${(await Ggo.findAll()).length}`);
  } catch (e) {
    throw e;
  }
};

const ggo = (() => {
  const all = async () => {
    const ggo_data = await Ggo.findAll();
    return ggo_data;
  };

  const where = async (condition) => {
    const ggo_data = await Ggo.findAll({ where: condition });
    return ggo_data;
  };

  return { all, where };
})();

const consolidation = (() => {
  const all = async () => {
    const consolidation_data = await Consolidation.findAll();
    return consolidation_data;
  };

  const where = async (condition) => {
    const consolidation_data = await Consolidation.findAll({
      where: condition,
    });
    return consolidation_data;
  };

  return { all, where };
})();

module.exports = { init, consolidation, ggo };
// SQL
