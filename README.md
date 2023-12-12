# README

## express-docker-postgresql

cd docker-compose/database/  
mv .env-sample .env  
docker-compose up

npm i
node app.js

![image](https://github.com/kurosawa-kuro/express-docker-postgresql/assets/15902862/6b8eb8f8-8785-40c3-b6d0-9a33b60052af)

## テーブル・シードデータについて

### テーブルの作成

テーブルがまだ作成されていない場合は、`db/migrate` に格納している sql を DBeaver 等のツールで実行してテーブルを作成してください。

### シードデータの挿入

シードデータが必要な場合は、`db/seed` に格納している sql を DBeaver 等のツールで実行して作成してください。
