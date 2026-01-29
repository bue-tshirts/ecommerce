import dotenv from "dotenv";
import Stripe from "stripe";
import { ENV } from "../config/env.js";

dotenv.config();

export const stripe = new Stripe(ENV.STRIPE_SECRET_KEY);
