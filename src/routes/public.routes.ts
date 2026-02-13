import { Router } from "express";
import { listPublicCourses } from "../controllers/public.controller";

const router = Router();

router.get("/courses", listPublicCourses);

export default router;
