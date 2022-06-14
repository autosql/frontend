window.onload = async () => {

// /landing/user
// /landing/erd
// /landing/share

let api_server = "https://api.dev.autosql.co.kr/"

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
