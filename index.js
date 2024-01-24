document.getElementById('addRow').addEventListener('click', function() {
    addRow();
});
document.getElementById('saveData').addEventListener('click', function() {
    saveData();
});
document.getElementById('showData').addEventListener('click', function() {
    showData();
});

function addRow() {
    var table = document.getElementById('myTable');
    var newRow = table.insertRow(table.rows.length);
    
    var cells = [];
    for (var i = 0; i < 4; i++) {
        cells[i] = newRow.insertCell(i);
        var input = document.createElement("input");
        input.type = "text";
        input.value = "";
        cells[i].appendChild(input);
    }
}

function saveData() {
    var table = document.getElementById('myTable');
    var data = [];

    // Itera sobre as linhas da tabela (começa do índice 1 para evitar o cabeçalho)
    for (var i = 1; i < table.rows.length; i++) {
        var rowData = {};

        // Itera sobre as células de cada linha
        for (var j = 0; j < 4; j++) {
            var input = table.rows[i].cells[j].querySelector('input');
            rowData[table.rows[0].cells[j].innerText.toLowerCase()] = input.value;
        }

        data.push(rowData);
    }

    // Armazenar dados no localStorage para persistência
    localStorage.setItem('myTableData', JSON.stringify(data));

    console.log('Dados salvos com sucesso.');
}

function showData() {
    var storedData = localStorage.getItem('myTableData');

    if (storedData) {
        var parsedData = JSON.parse(storedData);

        // Limpar a tabela antes de exibir os dados
        var tableBody = document.getElementById('myTable').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = '';
    }
}