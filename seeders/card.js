"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("card", [
      {
        listIdx: 1,
        name: "프로젝트 셋팅",
        descript: "프로젝트 세팅에 대한 카드",
        displayOrder: 1
      },
      {
        listIdx: 4,
        name: "개인보드 프로젝트 셋팅",
        descript: "프로젝트 세팅에 대한 카드",
        displayOrder: 1
      },
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("card", null, {});
  }
};