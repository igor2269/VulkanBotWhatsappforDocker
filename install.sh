#!/usr/bin/bash

apt update
apt upgrade
apt install nodejs -y
apt install npm -y
apt install libwebp -y
apt install ffmpeg -y
apt install wget -y
apt install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
npm i imgbb-uploader
npm cache clean -f
npm i got

echo "[*] All dependencies have been installed, please run the command \"npm start\" to immediately start the script"
