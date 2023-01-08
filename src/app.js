if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registraion) => {
      console.log("SW Registered!");
      console.log(registraion);
    })
    .catch((error) => {
      console.log("SW Registration Failed !!");
      console.log(error);
    });
}
