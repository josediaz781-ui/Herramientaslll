// scripts.js - Maneja apertura de modal con video embebido (YouTube)
$(function(){
  var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
  var $videoContainer = $('#videoContainer');

  // Al hacer clic en botón "Ver video"
  $(document).on('click', '.btn-open-video', function(){
    var videoId = $(this).attr('data-video-id');
    var iframe = $('<iframe>', {
      // src: 'https://www.youtube.com/embed/' + videoId + '?autoplay=1',
      src: videoId.includes('youtube.com') ? videoId + '?autoplay=1' : 'https://www.youtube.com/embed/' + videoId + '?autoplay=1',
      id: 'ytplayer',
      frameborder: 0,
      allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
      allowfullscreen: true,
      css: { width: '100%', height: '100%' }
    });
    $videoContainer.html(iframe);
    videoModal.show();
  });

  // Al cerrar el modal, eliminar el iframe para detener el video
  $('#videoModal').on('hidden.bs.modal', function () {
    $videoContainer.html('');
  });
});
