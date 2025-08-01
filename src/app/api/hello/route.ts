import type { NextApiRequest } from "next";

function handler(req: NextApiRequest) {
  return Response.json({ message: "Hello, Next.js API!" });
}

export { handler as GET, handler as POST };
