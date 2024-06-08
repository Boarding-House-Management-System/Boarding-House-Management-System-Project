const Owner = sequelize.define('Owner', {
  user_email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Owner;
