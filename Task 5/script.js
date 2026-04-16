document.getElementById("loadBtn").addEventListener("click", () => {
    document.getElementById("status").innerText = "Loading...";

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data loaded Suceesfully");
        }, 2000);
    });

    promise.then((data) => {
        document.getElementById("status").innerText = data;
    });
});