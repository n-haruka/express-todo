#!/bin/bash

# Dockerの公式GPGキーを追加
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# DockerリポジトリをAPTソースに追加
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# リポジトリを更新
sudo apt-get update

# Dockerエンジンをインストール
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Dockerを起動し、有効化
sudo systemctl enable docker
sudo systemctl start docker

# ユーザをdockerグループに追加 (これによりsudoなしでdockerコマンドを使用できるようになります)
sudo usermod -aG docker $USER

# Docker Composeのインストール
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# 実行権限を付与
sudo chmod +x /usr/local/bin/docker-compose

# 終了メッセージ
echo "DockerとDocker Composeのインストールが完了しました。"

