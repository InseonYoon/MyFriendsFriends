var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.60878537279098, 127.19152396482963),
        level: 1 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var markerPosition  = new kakao.maps.LatLng(37.60878537279098, 127.19152396482963);
var marker = new kakao.maps.Marker({
    position: markerPosition
});
marker.setMap(map);