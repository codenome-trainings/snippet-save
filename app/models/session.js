module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    'Session',
    {
      sid: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      exprires: DataTypes.DATE,
      data: DataTypes.TEXT,
    },
  );

  return Session;
};
