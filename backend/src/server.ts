import dotenv from "dotenv";
dotenv.config();
import app from "./app";

export class server {
  constructor(private readonly port = Number(process.env.PORT) || 3000) {}

  // connect to rabbitMq

  //start message consumers

  //start fastify server

  private async startapp(): Promise<void> {
    try {
      await app.listen({ port: this.port });
      console.log(`Server is running on port ${this.port}`);
    } catch (error) {
      app.log.error(error);
      process.exit(1);
    }
  }

  public async start(): Promise<void> {
    await this.startapp();
  }
}

const serverInstance = new server();
serverInstance.start()
