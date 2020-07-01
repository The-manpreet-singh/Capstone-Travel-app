var testRequest = require("supertest");
import server from "./server";
describe("load express", () => {
	test(
		"shpould responds to /",
		(test = (done) => {
			testRequest(server).get("/servertesting").expect(200, done);
		})
	);
});
