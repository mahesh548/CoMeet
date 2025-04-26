import { SplashScreen } from "@capacitor/splash-screen";

import { PhoneCallNotification } from "@anuradev/capacitor-phone-call-notification";

import { Contacts } from "@anuradev/capacitor-contacts";

import { PushNotifications } from "@capacitor/push-notifications";

import { StatusBar, Style } from "@capacitor/status-bar";

import { SpeechRecognition } from "@capacitor-community/speech-recognition";

import { Share } from "@capacitor/share";

async function shareContact(name, contact) {
  const text = `Name: ${name}, Phone: ${contact}`;
  await Share.share({
    text: text,
  });
}

async function shareApp() {
  const text =
    "Hey! Check out CoMeet! It’s a fantastic way to make secure video and audio calls. You can even send funny stickers during your calls and enjoy live translation in any language. Get it now at https://google.com.";
  await Share.share({
    text: text,
  });
}
async function askNotify() {
  localStorage.setItem("permit", "allow");
  document.getElementById("permit").style.display = "none";
  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === "prompt") {
    permStatus = await PushNotifications.requestPermissions();
  }

  if (permStatus.receive !== "granted") {
    throw new Error("User denied permissions!");
  }
}
async function checkNoti() {
  let permStatus = await PushNotifications.checkPermissions();
  if (permStatus.receive == "granted") {
    document.getElementById("permit").style.display = "none";
  }
}

async function createContact(name, number) {
  if (name.length > 0 && number.length > 0) {
    await Contacts.createContact({ name, number });
    window.location.reload();
  }
}
async function deleteContact(id) {
  await Contacts.deleteContact({ contactId: id });
  window.location.reload();
}
async function getUserContacts() {
  const permit = await Contacts.checkPermissions();
  if (permit.display == "granted") {
    const cont = await Contacts.getContacts();
    const contact = cont.contacts;
    return contact;
  } else {
    await Contacts.requestPermissions();
    const cont = await Contacts.getContacts();
    const contact = cont.contacts;
    return contact;
  }
}

PhoneCallNotification.addListener("token", async (res) => {
  const token = res?.data?.token;
  saveToken(token);
});
PhoneCallNotification.addListener("call_ring", (res) => {
  if (res?.data?.call_ring == "null") return;
  const data = JSON.parse(res?.data?.call_ring);
  window.attendCall(data);
});
PhoneCallNotification.addListener("call_logs", (res) => {
  if (res?.data?.call_logs == "null") return;
  const data = JSON.parse(res?.data?.call_logs);
  console.log(data);
  console.log(Object.keys(data));

  Object.keys(data).forEach((key) => {
    console.log(key);
    let dat = data[key]["nameValuePairs"];
    saveCallLogs(
      dat.phoneNumber,
      dat.time_stamp,
      dat.incoming,
      dat.mode,
      dat.status,
      dat.duration,
      dat.callId
    );
  });
});

PhoneCallNotification.addListener("decline", (res) => {
  window.declinedCall(res.data.callId);
});

async function saveToken(token) {
  const num = localStorage.getItem("sim");
  const SESSION = localStorage.getItem("SESSION");
  const data = {
    token: token,
    num: num,
    SESSION: SESSION,
  };
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const req = await fetch(
    "https://comradeeco.pythonanywhere.com/comeet/subToCall",
    options
  );
}

document.addEventListener("DOMContentLoaded", () => {
  SplashScreen.hide();
  PhoneCallNotification.sayHi({ event: "call_ring" });
  PhoneCallNotification.sayHi({ event: "call_logs" });
  PhoneCallNotification.sayHi({ event: "token" });
});

function changePip(status) {
  PhoneCallNotification.sayHi({ event: "save_status", status: status });
}

async function hideStatusBar() {
  StatusBar.setOverlaysWebView({ overlay: true });
  await StatusBar.hide();
}
async function showStatusBar() {
  StatusBar.setOverlaysWebView({ overlay: false });
  await StatusBar.show();
}

function test() {
  SpeechRecognition.requestPermissions();
}

window.getUserContacts = getUserContacts;
window.askNotify = askNotify;
window.hideStatusBar = hideStatusBar;
window.showStatusBar = showStatusBar;
window.changePip = changePip;
window.test = test;
window.createContact = createContact;
window.deleteContact = deleteContact;
window.shareContact = shareContact;
window.checkNoti = checkNoti;
window.shareApp = shareApp;
