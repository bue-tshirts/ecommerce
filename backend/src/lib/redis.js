import dotenv from "dotenv";
import Redis from "ioredis";
import { ENV } from "../config/env.js";

dotenv.config();

export const redis = new Redis(ENV.UPSTASH_REDIS_URL);
