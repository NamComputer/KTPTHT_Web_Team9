const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,//Luôn yêu cầu
      trim: true,//Loại bỏ khoảng trắng hai đầu
      unique: true,// Ko trùng tên sản phẩm 
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Category", categorySchema)
