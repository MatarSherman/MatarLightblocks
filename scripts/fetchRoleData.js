// const fs = require("fs");
// const path = require("path");
// const sanitizeHtml = require("sanitize-html");
require("dotenv").config();

const ALLOWED_CATEGORIES = ["Engineering", "Product & Research", "Marketing"];

async function fetchRoleData() {
//   const GHOST_KEY = process.env.GHOST_KEY;
//   if (!GHOST_KEY) {
//     throw new Error("GHOST_KEY is not set");
//   }

//   const res = await fetch(
//     `https://lightblocks.ghost.io/ghost/api/content/posts/?key=${GHOST_KEY}&include=tags`,
//     {
//       method: "GET",
//       headers: {
//         "Accept-Version": "v5.0",
//       },
//     }
//   );
//   const data = await res.json();

//   const sanitizedData = data.posts
//     .filter((post) => {
//       // all posts should have one tag
//       if (post.tags.length !== 1) return false;

//       if (!ALLOWED_CATEGORIES.includes(post.tags[0].name)) {
//         console.error(
//           `Tags should be one of the ALLOWED_CATEGORIES: ${ALLOWED_CATEGORIES.join(
//             ", "
//           )}`
//         );
//         process.exit(1);
//       }
//       return true;
//     })
//     .map((post) => {
//       return {
//         ...post,
//         html: sanitizeHtml(post.html),
//       };
//     });

//   const outputFile = path.join(
//     __dirname,
//     "..",
//     "src",
//     "app",
//     "open-roles",
//     "roleData.json"
//   );

//   const fileExists = fs.statSync(outputFile);

//   if (fileExists) {
//     fs.rmSync(outputFile);
//   }

//   fs.appendFileSync(outputFile, "");

//   fs.writeFileSync(outputFile, JSON.stringify(sanitizedData, null, 2), "utf8");
}

(async () => {
  await fetchRoleData();
})();
