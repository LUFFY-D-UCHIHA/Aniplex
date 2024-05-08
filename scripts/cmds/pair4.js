const { loadImage, createCanvas } = require("canvas");
const axios = require("axios");
const fs = require("fs-extra");

module.exports = {
  config: {
    name: "pair4",
    countDown: 5,
    role: 0,
    category: "fun",
    shortDescription: {
      en: "",
    },
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    let pathImg = __dirname + "/cache/background.png";
    let pathAvt1 = __dirname + "/cache/Avtmot.png";
    let pathAvt2 = __dirname + "/cache/Avthai.png";

    var id1 = event.senderID;
    var name1 = "User1"; // Replace with function that retrieves the name of the user
    var ThreadInfo = await api.getThreadInfo(event.threadID);
    var all = ThreadInfo.userInfo;
    for (let c of all) {
      if (c.id == id1) var gender1 = c.gender;
    }
    const botID = api.getCurrentUserID();
    let ungvien = [];
    if (gender1 == "FEMALE") {
      for (let u of all) {
        if (u.gender == "MALE") {
          if (u.id !== id1 && u.id !== botID) ungvien.push(u.id);
        }
      }
    } else if (gender1 == "MALE") {
      for (let u of all) {
        if (u.gender == "FEMALE") {
          if (u.id !== id1 && u.id !== botID) ungvien.push(u.id);
        }
      }
    } else {
      for (let u of all) {
        if (u.id !== id1 && u.id !== botID) ungvien.push(u.id);
      }
    }
    var id2 = ungvien[Math.floor(Math.random() * ungvien.length)];
    var name2 = "User2"; // Replace with function that retrieves the name of the user
