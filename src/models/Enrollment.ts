import { Schema, model, InferSchemaType, models, Types } from "mongoose";

const enrollmentSchema = new Schema(
  {
    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    deletedAt: { type: Date, default: null }, 
  },
  { timestamps: true }
);

// Evita inscripciones duplicadas del mismo alumno al mismo curso
enrollmentSchema.index({ student: 1, course: 1 }, { unique: true });

// Tipado inferido
type EnrollmentType = InferSchemaType<typeof enrollmentSchema> & {
  student: Types.ObjectId;
  course: Types.ObjectId;
};

const Enrollment = model<EnrollmentType>("Enrollment", enrollmentSchema);

export default Enrollment;
