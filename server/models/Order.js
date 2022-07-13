const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
  {
    full_name: { type: String },
    username: { type: String, required: true },
    userId: { type: String, required: true },
    userImg: { type: String },
    products: [
      // {
      //   productId: {
      //     type: String,
      //   },
      //   name: {
      //     type: String,
      //     required: true,
      //     unique: true,
      //   },
      //   price: {
      //     type: String,
      //     required: true,
      //   },
      //   total: {
      //     type: String,
      //     required: true,
      //   },
      //   quantity: {
      //     type: Number,
      //     default: 1,
      //   },
      //   img: {
      //     type: String,
      // },
      // },
    ],
    total: {type: Number},
    promocode:{type: Number},
    amount: { type: Number, required: true },
    phone: { type: String, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);
