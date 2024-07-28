const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://beeiizvdxkls2w3a2loydzjc7i0qrlwn.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();