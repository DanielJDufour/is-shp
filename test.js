const test = require("ava");
const fs = require("fs");
const isSHP = require("./is-shp");

test("id shp file", t => {
    const buffer = fs.readFileSync("./data/chattanooga.shp");
    const { result } = isSHP({ data: buffer, debug: false });
    t.true(result);
});
