const SERVER_URL = "http://localhost:4321/data";

async function getData() {
  try {
    const response = await fetch(SERVER_URL);
    const data = await response.json();
    console.log("data received:", data);
  } catch (err) {
    console.error("request error:", err);
  }
}

getData();

// async function getDataForTenSeconds() {
//   const interval = setInterval(getData, 2000);

//   setTimeout(() => {
//     clearInterval(interval);
//     console.log("10 seconds passed, stopping requests");
//   }, 10000);
// }

// getDataForTenSeconds(); // remarque: cette méthode attend 2sec avant de lancer la première requête, donc 5 requêtes seulement seront faites

async function getDataForTenSeconds() {
  getData();

  const interval = setInterval(getData, 2000);

  setTimeout(() => {
    clearInterval(interval);
    console.log("10 seconds passed, stopping requests");
  }, 10000);
}

getDataForTenSeconds();
