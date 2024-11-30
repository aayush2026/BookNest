import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
  title:String,
  author:String,
  category:String,
  price:Number,
  image:String,
  category:String,
  availability:Boolean,
  new:Boolean,
  popular:Boolean,
  discription:String
})

const Book = mongoose.model("Book", bookSchema)

export default Book;