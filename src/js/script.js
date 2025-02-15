
function addTask() {
    //get input values
    const taskName = document.getElementById("taskName").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskPriority = document.getElementById("taskPriority").value;
    const tableBody = document.getElementById("taskTableBody");

    taskName.value;
    taskDate.value;
    taskPriority.value;

    //validate input
    if (taskName === "" || taskDate === "" || taskPriority === "Select Priority") {
        alert("Please fill in all fields!");
        return;
    }

    //fomart date mm/dd/yyyy
    const formattedDate = fomartDate(taskDate);

    //create a new row
    const newRow = document.createElement("tr");
    newRow.classList.add("border-table");

    //create cell
    const nameCell = document.createElement("td");
    nameCell.classList.add("p-3");
    nameCell.innerText = taskName;

    const dateCell = document.createElement("td");
    dateCell.classList.add("p-3");
    dateCell.innerHTML = formattedDate;

    const priorityCell = document.createElement("td");
    priorityCell.classList.add("p-3", "font-bold");

    //priority color
    if (taskPriority === "High") {
        priorityCell.classList.add("text-red-500");
    } else if (taskPriority === "Meduim") {
        priorityCell.classList.add("text-yellow-500");
    } else {
        priorityCell.classList.add("text-green-500")
    }
    priorityCell.innerHTML = taskPriority;

    //stutus cell pending auto
    const statusCell = document.createElement("td");
    statusCell.classList.add("p-3");

    const statusBadge = document.createElement("button");
    statusBadge.classList.add("bg-yellow-600", "text-white", "px-3", "py-1", "rounded");
    statusBadge.innerHTML  = "Pending";

    //click pending to complete
    statusBadge.addEventListener("click", function () {
        if (statusBadge.innerText === "Pending") {
            statusBadge.innerText = "Completed";
            statusBadge.classList.remove("bg-yellow-600");
            statusBadge.classList.add("bg-green-600");
        }
    });

    statusCell.appendChild(statusBadge);

    //append cell to new row
    newRow.appendChild(nameCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(priorityCell);
    newRow.appendChild(statusCell);
    //append row to table
    tableBody.appendChild(newRow);

    //clear input fields
    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
    
}

function fomartDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() +1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`
}