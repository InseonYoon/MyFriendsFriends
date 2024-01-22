var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.60878537279098, 127.19152396482963),
        level: 1 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

var iwContent = '<div style="padding:5px;">남양주시동물보호센터</div>'
iwPosition = new kakao.maps.LatLng(37.60878537279098, 127.19152396482963),
iwRemoveable = true;

// var infowindow = new kakao.maps.InfoWindow({
//     map: map, // 인포윈도우가 표시될 지도
//     position : iwPosition,
//     content : iwContent,
//     removable : iwRemoveable
// });