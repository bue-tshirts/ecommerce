import mongoose from "mongoose";

const productImageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, "Image is required"]
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }
}, { timestamps: true });

const ProductImage = mongoose.model("ProductImage", productImageSchema);
export default ProductImage;