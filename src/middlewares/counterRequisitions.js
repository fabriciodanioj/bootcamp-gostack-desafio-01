const counterRequisitions = (req, res, next) => {
  console.count('Requisiçoes feitas:');

  next();
}

module.exports = counterRequisitions;