import request from "supertest";
import { app } from "../app";

test("GET /coffee should return correct object", async () => {
  const res = await request(app).get("/coffee").query({ coffeeName: "Latte" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Latte",
  });
});

test("GET /coffee with different param should return correct object", async () => {
  const res = await request(app)
    .get("/coffee")
    .query({ coffeeName: "Espresso" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Coffee",
    name: "Espresso",
  });
});
