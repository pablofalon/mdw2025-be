import { Schema, model, InferSchemaType, models } from "mongoose";

const studentSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true, maxlength: 60 },
    lastName: { type: String, required: true, trim: true, maxlength: 60 },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    deletedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

// Índice único explícito (además de unique:true)
studentSchema.index({ email: 1 }, { unique: true });

type StudentType = InferSchemaType<typeof studentSchema>;

const Student = model<StudentType>("Student", studentSchema);

export default Student;
