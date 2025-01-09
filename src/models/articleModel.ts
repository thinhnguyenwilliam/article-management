import mongoose, { Schema, Document } from 'mongoose';

// Define the interface for an Article document
export interface IArticle extends Document {
    title: string;
    avatar: string;
    description: string;
    //categoryId: mongoose.Schema.Types.ObjectId; // Assuming it references a Category collection
    deleted: boolean;
    deletedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}

// Define the Article schema
const ArticleSchema: Schema = new Schema({
    title: {
        type: String,
        required: true, // Ensure that title is required
        trim: true, // Automatically trims whitespace
    },
    avatar: {
        type: String,
        required: true, // Ensure that avatar is required
        match: [/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/, 'Please enter a valid avatar URL'], // Validate URL format
    },
    description: {
        type: String,
        required: true, // Ensure that description is required
        trim: true,
    },
    // categoryId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Category', // Reference to the Category model (if needed)
    //     required: true, // Make categoryId a required field
    // },
    deleted: {
        type: Boolean,
        default: false, // Default to false
    },
    deletedAt: {
        type: Date,
        default: null, // Set default as null
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Export the Article model
export const Article = mongoose.model<IArticle>('Article', ArticleSchema);

