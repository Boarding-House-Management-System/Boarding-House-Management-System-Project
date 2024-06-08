
const Finance = sequelize.define('Finance', {
  user_email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Finance;
