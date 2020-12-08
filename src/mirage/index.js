import { createServer, Model } from "miragejs";

export function startMirage(environment = "development") {
  return createServer({
    environment,
    models: {
      user: Model,
    },
    routes() {
      this.namespace = "api";
      this.get("users");
      this.get("/users/:id", (schema, req) => {
        const id = req.params.id;
        return schema.users.find(id);
      });
      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.users.create(attrs);
      });
      this.patch("/users/:id", (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        return schema.users.find(id).update(attrs);
      });
    },
  });
}
