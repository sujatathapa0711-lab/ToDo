const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.onclick = () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const checkbox=document.createElement("input");
  checkbox.type="checkbox";
  checkbox.className="checkbox";

  const span = document.createElement("span");
  span.textContent = text;
  

  const delBtn = document.createElement("button");
  delBtn.innerHTML ="<i class='bxr  bx-x'  style='color:#e50c0c'></i>";
  delBtn.className = "deleteBtn";
  delBtn.onclick = () => li.remove();

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
};
