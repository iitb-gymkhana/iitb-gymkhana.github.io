// https://stackoverflow.com/questions/8208043/display-google-map-on-hover-link-or-text

$(document).on("mouseenter", ".mapthis", function(e) {
  var desiredMapWidthPercent = .8;
  var mapWidth = Math.round($(window).width() * desiredMapWidthPercent);
  var aspectRatio = mapWidth / $(window).height();
  var mapHeight = Math.round($(window).height() * aspectRatio);
  var boxWidth = mapWidth;
  var boxHeight = mapHeight;
  var scale = 1;
  var pZoom = parseInt($(this).attr("zoom"));
  var pPlace = $(this).attr("place"); 
  if((mapHeight > 640) || (mapWidth > 640)){
      mapHeight = Math.round(mapHeight / 3.5);
      mapWidth = Math.round(mapWidth / 3.5);
      scale = 2;
      if(((mapHeight) > 1280) || ((mapWidth) > 1280)){
          mapHeight = 640;
          mapWidth = 640;
          boxWidth = 1280;
          boxHeight = 1280;
      }else{
          boxWidth = mapWidth * 2;
          boxHeight = mapHeight * 2;
      }
  }
  var fromleft = Math.max(0, ((($(window).width() - boxWidth) / 2) + $(window).scrollLeft()))+'px';
  var fromtop = Math.max(0, ((($(window).height() - boxHeight) / 2) + $(window).scrollTop()))+'px';
  var pText = $(this).html();
  $('#mapHolder').html('<a href="https://maps.google.com/maps?q=' + pPlace + '&z=11" target="new"><img border=0 src="https://maps.google.com/maps/api/staticmap?center=' + pPlace + '&zoom=' + pZoom + '&key=AIzaSyAUbRHtu3k_fg3jDGk_qAatE5jA4bC_ndE&size='+mapWidth+'x'+mapHeight+'&scale='+scale+'&sensor=false&format=png&markers=color:blue|' + pPlace + '"></a>');
  $('#mapHolder').css({position:'absolute',top:fromtop,left:fromleft, width:boxWidth, 'z-index':'999'});
  $('#mapHolder').show();
});
$(document).on("mouseleave", ".mapthis", function(e) {
  if($(e.relatedTarget).closest('#mapHolder').length){
      $("#mapHolder").on("mouseleave", function(e) {
          $('#mapHolder').hide();
      });
      return;
  }
  $('#mapHolder').hide();            
});