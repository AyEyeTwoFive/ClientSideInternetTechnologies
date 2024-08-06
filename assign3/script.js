document.addEventListener('DOMContentLoaded', () => {
    updateTable();
});

function updateTable() {
    const tableBody = document.querySelector('#collegeTable tbody');
    tableBody.innerHTML = '';

    const maxTuition = document.getElementById('maxTuition').value;
    const maxHighSAT = document.getElementById('maxHighSAT').value;
    const minLowSAT = document.getElementById('minLowSAT').value;
    const ownership = document.querySelector('input[name="ownership"]:checked').value;

    univArray.forEach(univ => {
        if ((ownership === 'any' || univ.ownership === ownership) &&
            (!maxTuition || univ.tuition <= maxTuition) &&
            (!maxHighSAT || univ.SATh <= maxHighSAT) &&
            (!minLowSAT || univ.SATl >= minLowSAT)) {

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${univ.nickname}</td>
                <td>${univ.SATh}</td>
                <td>${univ.SATl}</td>
                <td>${univ.tuition}</td>
            `;
            tableBody.appendChild(row);
        }
    });
}
