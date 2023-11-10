import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === "production") {
  global.prismadb = client;
}

export default client;

//nextjs hot reloading: on every code change, code updates and reruns. When this happens, prismaclient creates a new client instance. To prevent this, we save prismaclient to a global file. global files are not affected by hot-reloading.
