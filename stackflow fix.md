2

The error 126 means that, bash doesn't have permission to execute the vite binary.

You can fix that by:

javascript
sudo chmod +x node_modules/.bin/vite
If the above didn't work, a fresh install of the node_modules might help.

javascript
rm -rf node_modules
npm ci
Share
Improve this answer
Follow
answered Sep 4, 2023 at 8:33
Robin Thomas's user avatar
Robin Thomas
4,32622 gold badges1919 silver badges3131 bronze badges
Sign up to request clarification or add additional context in comments.

1 Comment


26ph19
Over a year ago
is there a possibility to change folder/files permissions on vercel server for nextjs 13 project?
0

add this in package.json
under scripts

javascript
"vercel-build": "npm ci && npm run build",
Share
Improve this answer
Follow
answered Apr 6 at 17:57
Muhammad Yahya's user avatar
Muhammad Yahya
1355 bronze badges
1 Comment


배건우
Aug 24 at 6:32
this worked for me
-1

Update the build script in package.json:

"scripts": {
  "build": "chmod +x node_modules/.bin/vite && vite build"
}