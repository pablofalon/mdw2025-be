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

// Tipo inferido desde el schema
export type Course = InferSchemaType<typeof courseSchema>;

// Evita error de re-compilación en dev (ts-node-dev) por modelos duplicados
const CourseModel = models.Course || model<Course>("Course", courseSchema);

export default CourseModel;
