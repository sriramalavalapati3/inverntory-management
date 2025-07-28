import fp from 'fastify-plugin';
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

import { FastifyInstance } from 'fastify';

export default fp(async function databaseConnect(fastify: FastifyInstance) {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    fastify.log.info('MongoDB connected');
  } catch (error) {
    fastify.log.error('MongoDB connection error:', error);
    throw error;
  }
}
)
