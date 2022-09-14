// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  const fc_notification = document.getElementById("FC_Notification");
  const allNotif = [...fc_notification.getElementsByClassName("slideInRight")];
  allNotif.forEach(notif =>
    notif.getElementsByClassName("md-icon material-icons-outlined undefined undefined font-size-20--important")[0].click()
  )
}