// background.js
let color = '#fc673d';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
});