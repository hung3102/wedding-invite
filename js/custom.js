document.addEventListener("DOMContentLoaded", function(event) {
  var d = new Date('2018/11/26 12:00:00');

  // default example
  simplyCountdown('.simply-countdown-one', {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
      enableUtc: false
  });

  var $gName = $('.guest-name')
  var $inputName = $('.input-name')
  var $modal = $('#askNameModel')
  var $okBtn = $('.modal-ok')
  var $cancelBtn = $('.modal-cancel')

  var splits = window.location.href.split('guest=')
  if(splits.length > 1) {
    try {
      var name = splits[1].split('&')[0]
      $gName.text(decodeURIComponent(name))
    } catch(e) {}
  }

  if(!$gName.text()) {
      $modal.toggle()
  }
  $okBtn.click(function(){
    if(!$inputName.val()) {
      return
    }

    window.location.href = window.location.href.split('?')[0] + '?guest=' + $inputName.val()
    //$gName.text($inputName.val())
    //$modal.toggle()
  })

  $cancelBtn.click(function(){
    $modal.toggle()
  })
});
