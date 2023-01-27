import auth from "../../services/Auth";
import { Router } from "express";

const router = Router()

router.route("/signup").post( auth.signup )

router.route("/login").post( auth.login )

export default router