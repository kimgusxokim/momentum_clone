// navigator.geolocation.getCurrentPosition 이 함수로 위치 정보를 받아오는 거고
// 그 위치 정보를 function onGeoOk(position) -> position이란 바구니에 담는 거다.
// 그렇기 때문에 position은 그냥 지은 이름이라 변경해도 상관 없음. 중요한 건 저 함수가 위치
// 정보를 받아오는 함수이고 그걸 담을 수 있는 바구니를 만들어주는 것일 뿐.

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`You live in ${lat}, ${lng}`);
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
