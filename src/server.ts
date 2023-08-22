import { app } from "./app";

export const server = app.listen(3000, () => {
  console.log("Express server started on port 3000");
});
