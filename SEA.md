```bash

npx webpack --mode=production --node-env=production

node --experimental-sea-config sea-config.json

node -e "require('fs').copyFileSync(process.execPath, 'out/main.exe')"

signtool remove /s out/main.exe

npx postject out/main.exe NODE_SEA_BLOB out/main.blob ^
--sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2

signtool sign /fd SHA256 /a out/main.exe

```
