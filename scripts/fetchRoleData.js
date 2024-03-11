const fs = require("fs");
const path = require("path");
const sanitizeHtml = require("sanitize-html");
require("dotenv").config();

async function fetchRoleData() {
  const GHOST_KEY = process.env.GHOST_KEY;
  if (!GHOST_KEY) {
    throw new Error("GHOST_KEY is not set");
  }

  const res = await fetch(
    `https://lightblocks-test.ghost.io/ghost/api/content/posts/?key=${GHOST_KEY}&include=tags`,
    {
      method: "GET",
      headers: {
        "Accept-Version": "v5.0",
      },
    }
  );
  const data = await res.json();

  const outputFile = path.join(
    __dirname,
    "..",
    "src",
    "app",
    "open-roles",
    "roleData.json"
  );

  const fileExists = fs.statSync(outputFile);

  if (fileExists) {
    fs.rmSync(outputFile);
  }

  fs.appendFileSync(outputFile, "");

  fs.writeFileSync(
    outputFile,
    JSON.stringify(
      data.posts.map((post) => ({
        ...post,
        html: sanitizeHtml(post.html),
      })),
      null,
      2
    ),
    "utf8"
  );
}

(async () => {
  await fetchRoleData();
})();
