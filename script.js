// JavaScript

console.log('Hello world!');

const map = L.map('map').setView([33.66577150127235, 130.41651774954184], 15);

//国土地理院マップ
//L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>', }).addTo(map);

//Open Street Map 1
//L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);

// Open Street Map hot
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'
}).addTo(map);


//アイコン
//const whiteIcon = L.icon({
//    iconUrl: 'images/ico.png',
//    shadowUrl: 'images/ico_shadow.png',

//    iconSize: [40, 40], // size of the icon
//    shadowSize: [40, 40], // size of the shadow
//    iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
//    shadowAnchor: [20, 40],  // the same for the shadow
//    popupAnchor: [0, -42] // point from which the popup should open relative to the iconAnchor
//});

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
        shadowUrl: 'images/ico_shadow.png',
        iconSize: [40, 40],
        shadowSize: [40, 40],
        iconAnchor: [20, 40],
        shadowAnchor: [20, 40],
        popupAnchor: [0, -42]
    }
});

const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' }),
    blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });

L.marker([33.66577150127235, 130.41651774954184], { icon: whiteIcon }).addTo(map).bindPopup('照葉スパリゾート 本店<br><img src="images/img01.png" alt="img">').openPopup();

L.marker([33.65637710459276, 130.4292312329963], { icon: pinkIcon }).addTo(map).bindPopup('イオンモール香椎浜<br><img src="images/img02.png" alt="img">');

L.marker([33.650278283522, 130.4392072476748], { icon: blueIcon }).addTo(map).bindPopup('なみきスクエア<br><img src="images/img03.png" alt="img">');

const circle = L.circle([33.66577150127235, 130.41651774954184], {
    color: 'red', //円の輪郭線の色
    fillColor: '#f03', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("半径1kmの範囲");

// 多角形の表示
const polygon = L.polygon([
    [33.66577150127235, 130.41651774954184],
    [33.672292, 130.443002],
    [33.650278283522, 130.4392072476748]
], {
    color: 'green',
    fillColor: '#6dd571',
    fillOpacity: 0.3
}).addTo(map);

const polygon2 = L.polygon([
    [33.66577150127235, 130.41651774954184],
    [33.666675, 130.400655],
    [33.652191, 130.405065],
    [33.656299, 130.429323]
], {
    color: 'blue',
    fillColor: '#90b3f9',
    fillOpacity: 0.3
}).addTo(map);

// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("ここは" + e.latlng.toString() + "です")
        .openOn(map);
}

map.on('click', onMapClick);
