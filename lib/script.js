var arCuMessages = ["Здравствуйте!", "Чем могу Вам помочь?"];
var arCuLoop = false;
var arCuCloseLastMessage = false;
var arCuPromptClosed = false;
var _arCuTimeOut = null;
var arCuDelayFirst = 2000;
var arCuTypingTime = 2000;
var arCuMessageTime = 4000;
var arCuClosedCookie = 0;
var arcItems = [];
window.addEventListener('load', function() {
  arCuClosedCookie = arCuGetCookie('arcu-closed');
  jQuery('#arcontactus').on('arcontactus.init', function() {
    if (arCuClosedCookie) {
      return false;
    }
    arCuShowMessages();
  });
  jQuery('#arcontactus').on('arcontactus.openMenu', function() {
    clearTimeout(_arCuTimeOut);
    arCuPromptClosed = true;
    jQuery('#contact').contactUs('hidePrompt');
    arCuCreateCookie('arcu-closed', 1, 30);
  });
  jQuery('#arcontactus').on('arcontactus.hidePrompt', function() {
    clearTimeout(_arCuTimeOut);
    arCuPromptClosed = true;
    arCuCreateCookie('arcu-closed', 1, 30);
  });
  var arcItem = {};
  arcItem.id = 'msg-item-1';
  arcItem.class = 'msg-item-whatsapp';
  arcItem.title = 'WhatsApp';
  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>';
  arcItem.href = 'https://wa.me/+77071638016';
  arcItem.color = '#43d854';
  arcItems.push(arcItem);
  var arcItem = {};
  arcItem.id = 'msg-item-9';
  arcItem.class = 'msg-item-telegram-plane';
  arcItem.title = 'Telegram';
  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>';
  arcItem.href = 'https://t.me/Sadyk_sapiens';
  arcItem.color = '#1EBEA5';
  arcItems.push(arcItem);
  var arcItem = {};
  arcItem.id = 'msg-item-7';
  arcItem.class = 'msg-item-envelope';
  arcItem.title = 'Отправить письмо';
  arcItem.icon = '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"></path></svg>';
  arcItem.href = 'mailto:almatymedal@gmail.com';
  arcItem.color = '#FF643A';
  arcItems.push(arcItem);
  var arcItem = {};
  arcItem.id = 'msg-item-8';
  arcItem.class = 'msg-item-phone';
  arcItem.title = 'Позвонить';
  arcItem.icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>';
  arcItem.href = 'tel:8 777 116 88 12';
  arcItem.color = '#4EB625';
  arcItems.push(arcItem);
  jQuery('#arcontactus').contactUs({
    items: arcItems
  });
});