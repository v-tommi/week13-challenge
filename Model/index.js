// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },

  foreignKey: 'product_id',
  as: 'products_tagged'
});
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },

  foreignKey: 'product_id',
  as: 'tagged_products'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};