
document.getElementById("addbtn").onclick = () => {
    const text = document.getElementById("text").value.trim();
    if (text === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("tasklist").appendChild(li);
    document.getElementById("text").value = ""; // clear input
};

