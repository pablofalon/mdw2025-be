import { Request, Response } from "express";
import Course from "../models/Course";

export async function listPublicCourses(_req: Request, res: Response) {
  const courses = await Course.find({ isPublished: true, deletedAt: null })
    .select("title description isPublished createdAt")
    .sort({ createdAt: -1 });

  res.json(courses);
}
