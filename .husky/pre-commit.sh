# .husky/pre-commit
echo 'check for Biome lint and format all files'
npm run biome:lint || (echo 'Error on Biome check' && exit 1)

echo 'Done'
