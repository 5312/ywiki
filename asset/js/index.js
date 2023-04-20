$("#shoucang").click(function () {
  alert("请按快捷键Ctrl+D收藏本页，谢谢");
});

$("#qrcode").click(function () {
  if ($("#qrcodebox").css("display") == "none") {
    $("#qrcodebox").show();
  } else {
    $("#qrcodebox").hide();
  }
});
$("#qrclose").click(function () {
  $("#qrcodebox").hide();
});
