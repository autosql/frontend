window.onload = async () => {

// /landing/user
// /landing/erd
// /landing/share

let api_server = "http://ec2-13-125-129-63.ap-northeast-2.compute.amazonaws.com:3000/"

let user = await fetch(api_server + "landing/user")
  .then(response => response.json())
  .catch(error => console.log('error', error));
document.getElementById('user-count').textContent = user.count;

let erd = await fetch(api_server + "landing/erd")
  .then(response => response.json())
  .catch(error => console.log('error', error));
document.getElementById('erd-count').textContent = erd.count;

let share = await fetch(api_server + "landing/share")
  .then(response => response.json())
  .catch(error => console.log('error', error));
document.getElementById('share-count').textContent = share.count;

}
