import { Schema, model, InferSchemaType, models } from "mongoose";

const courseSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 80 },
    description: { type: String, default: "", maxlength: 500 },
    isPublished: { type: Boolean, default: true },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

type CourseType = InferSchemaType<typeof courseSchema>;

const Course = model<CourseType>("Course", courseSchema);

export default Course;
