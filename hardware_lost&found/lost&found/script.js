document.addEventListener("DOMContentLoaded", function () {
    fetchData();
});

const dbRef = firebase.database().ref("RFID_Tags");

function fetchData() {
    console.log("🔍 Fetching data...");

    dbRef.on("value", (snapshot) => {
        const dataTable = document.getElementById("data-table");
        dataTable.innerHTML = "";

        if (snapshot.exists()) {
            console.log("✅ Data found:", snapshot.val());
            snapshot.forEach((childSnapshot) => {
                const item = childSnapshot.val();
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.lostItem || 'N/A'}</td>
                    <td>${item.ownerName || 'N/A'}</td>
                    <td>${item.ownerContact || 'N/A'}</td>
                    <td>${item.ownerEmail || 'N/A'}</td>
                    <td class="${item.status === 'Lost' ? 'lost' : 'found'}">${item.status || 'Unknown'}</td>
                    <td><button onclick="toggleStatus('${childSnapshot.key}', '${item.status || 'Lost'}')">Mark as ${item.status === 'Lost' ? 'Found' : 'Lost'}</button></td>
                `;
                dataTable.appendChild(row);
            });
        } else {
            console.warn("⚠️ No data found in Firebase.");
            dataTable.innerHTML = "<tr><td colspan='6'>No data available</td></tr>";
        }
    }, (error) => {
        console.error("❌ Error fetching data:", error);
        document.getElementById("data-table").innerHTML = "<tr><td colspan='6'>Error loading data</td></tr>";
    });
}

function toggleStatus(itemId, currentStatus) {
    const newStatus = currentStatus === "Lost" ? "Found" : "Lost";
    firebase.database().ref(`RFID_Tags/${itemId}`).update({ status: newStatus })
        .then(() => console.log(`✅ Status updated to ${newStatus}`))
        .catch(error => console.error("❌ Error updating status:", error));
}

function searchItems() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        let itemName = row.cells[0].innerText.toLowerCase();
        row.style.display = itemName.includes(input) ? "table-row" : "none";
    });
}
