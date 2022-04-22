// Listar movimentações
function showMovementsReport(){
    const url = "http://127.0.0.1:80/crudContainers/controllers/readMovementsReport.php";

    fetch(url , {
        method: "GET"
    }).then(response => response.text()).then(response => {
        tableReportMovements.innerHTML = response
    }).catch(err => Swal.fire(err))
}

// Calcular importação e exportação
function countTotalImportExport(){
    const url = "http://127.0.0.1:80/crudContainers/controllers/countMovementsImport.php";

    fetch(url, {
        method:"GET"
    }).then(response => response.text().then(response => {
        numberImports.innerHTML = response
    })).catch(err => Swal.fire(err));

    const url2 = "http://127.0.0.1:80/crudContainers/controllers/countMovementsExports.php";

    fetch(url2, {
        method:"GET"
    }).then(response => response.text().then(response => {
        numberExports.innerHTML = response
    })).catch(err => Swal.fire(err));
}