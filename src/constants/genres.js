// export const GENRES = {
//   1301: {
//     name: "Arts",
//     subGenre: {
//       1306: { name: "Food", subGenre: null },
//       1401: { name: "Literature", subGenre: null },
//       1402: { name: "Design", subGenre: null },
//       1405: { name: "Performing Arts", subGenre: null },
//       1406: { name: "Visual Arts", subGenre: null },
//       1459: { name: "Fashion & Beauty", subGenre: null }
//     }
//   },
//   1303: {
//     name: "Comedy",
//     subGenre: null
//   },
//   1304: {
//     name: "Education",
//     subGenre: {
//       1415: { name: "K–12", subGenre: null },
//       1416: { name: "Higher Education", subGenre: null },
//       1468: { name: "Educational Technology", subGenre: null },
//       1469: { name: "Language Courses", subGenre: null },
//       1470: { name: "Training", subGenre: null }
//     }
//   },
//   1305: {
//     name: "Kids & Family",
//     subGenre: null
//   },
//   1307: {
//     name: "Health",
//     subGenre: {
//       1417: { name: "Fitness & Nutrition" },
//       1420: { name: "Self-Help" },
//       1421: { name: "Sexuality" },
//       1481: { name: "Alternative Health" }
//     }
//   },
//   1309: {
//     name: "TV & Film",
//     subGenre: null
//   },
//   1310: {
//     name: "Music",
//     subGenre: null
//   },
//   1311: {
//     name: "News & Politics",
//     subGenre: null
//   }
// };
export const DEFAULT_GENRES = [1301, 1304, 1303, 1305, 1309, 1310, 1311];
export const GENRES = {
  1301: { name: "Arts", subGenre: [1306, 1401, 1402, 1405, 1406, 1459] },
  1306: { name: "Food", subGenre: null },
  1401: { name: "Literature", subGenre: null },
  1402: { name: "Design", subGenre: null },
  1405: { name: "Performing Arts", subGenre: null },
  1406: { name: "Visual Arts", subGenre: null },
  1459: { name: "Fashion & Beauty", subGenre: null },
  1303: { name: "Comedy", subGenre: null },
  1304: { name: "Education", subGenre: [1415, 1416, 1468, 1469, 1470] },
  1415: { name: "K–12", subGenre: null },
  1416: { name: "Higher Education", subGenre: null },
  1468: { name: "Educational Technology", subGenre: null },
  1469: { name: "Language Courses", subGenre: null },
  1470: { name: "Training", subGenre: null },
  1305: { name: "Kids & Family", subGenre: null },
  1307: { name: "Health", subGenre: [1417, 1420, 1421, 1481] },
  1417: { name: "Fitness & Nutrition", subGenre: null },
  1420: { name: "Self-Help", subGenre: null },
  1421: { name: "Sexuality", subGenre: null },
  1481: { name: "Alternative Health", subGenre: null },
  1309: { name: "TV & Film", subGenre: null },
  1310: { name: "Music", subGenre: null },
  1311: { name: "News & Politics", subGenre: null }
};
