// Criar movimentação
function createMovement(){
    const numberContainer = document.getElementById("selectNumberContainer").value;
    const type = document.getElementById("selectTypeMovement").value;
    const hrStart = document.getElementById("inputHrStart").value;
    const dtStart = document.getElementById("inputDtStart").value;
    const hrEnd = document.getElementById("inputHrEnd").value;
    const dtEnd = document.getElementById("inputDtEnd").value;

    const form = new FormData();

    form.append("numberContainer", numberContainer);
    form.append("type", type);
    form.append("hrStart", hrStart);
    form.append("dtStart", dtStart);
    form.append("hrEnd", hrEnd);
    form.append("dtEnd", dtEnd);

    const url = "http://127.0.0.1:80/crudContainers/controllers/createMovements.php";

    fetch(url, {
        method: "POST",
        body: form
    }).then(response => {
        response.json().then(result => {
            showMovements();
            Swal.fire(result.message);
        })
    }).catch(err => Swal.fire(err));
}

// Listar movimentações
function showMovements(){
    const url = "http://127.0.0.1:80/crudContainers/controllers/readMovements.php";

    fetch(url, {
        method: "GET"
    }).then(response => response.text()).then(response => tableMovements.innerHTML = response).catch(err => Swal.fire(err));
}

// buscar containers
function searchContainers(){
    const url = "http://127.0.0.1:80/crudContainers/controllers/searchContainers.php";

    fetch(url, {
        method: "GET"
    }).then(response => response.text()).then(response => selectNumberContainer.innerHTML += response).catch(err => Swal.fire(err));
}

// Deletar movimentação
function deleteMovement(id){
    const form = new FormData();
    form.append ("id", id);

    const url = "http://127.0.0.1:80/crudContainers/controllers/deleteMovements.php";

    Swal.fire({
        title: 'Você tem certeza?',
        text: "Essa ação não podera ser desfeita!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, Excluir!',
        cancelButtonText: 'Cancelar!'
    }).then((result) => {
        if(result.isConfirmed) {
            fetch(url, {
                method: "POST",
                body: form
            }).then(response => {
                response.json().then(data => {
                    Swal.fire(data.message);
                    showMovements();
                })
            }).catch(err => Swal.fire(err))
        }
    })
}

// Atualizar Movimentação
function fillModalUpdateMovement(id){
    const form = new FormData();
    form.append ("id", id);

    const url = "http://127.0.0.1:80/crudContainers/controllers/fillModalUpdateMovement.php";

    fetch(url, {
        method: "POST",
        body: form
    }).then(response => {
        response.json().then(data => {
            const id = document.getElementById("inputUpdateID");
            const numberContainer = document.getElementById("inputUpdateNumberContainer");
            const type = document.getElementById("selectUpdateTypeMovement");
            const hrStart = document.getElementById("inputUpdateHrStart");
            const dtStart = document.getElementById("inputUpdateDtStart");
            const hrEnd = document.getElementById("inputUpdateHrEnd");
            const dtEnd = document.getElementById("inputUpdateDtEnd");

            id.value = data[0]["ID"];
            numberContainer.value = data[0]["numberContainer"];
            type.value = data[0]["type"];
            hrStart.value = data[0]["hrStart"];
            dtStart.value = data[0]["dtStart"];
            hrEnd.value = data[0]["hrEnd"];
            dtEnd.value = data[0]["dtEnd"];

            modalUpdateMovement.show();
        })
    })
}

function updateContainer(){
    const id = document.getElementById("inputUpdateID").value;
    const numberContainer = document.getElementById("inputUpdateNumberContainer").value;
    const type = document.getElementById("selectUpdateTypeMovement").value;
    const hrStart = document.getElementById("inputUpdateHrStart").value;
    const dtStart = document.getElementById("inputUpdateDtStart").value;
    const hrEnd = document.getElementById("inputUpdateHrEnd").value;
    const dtEnd = document.getElementById("inputUpdateDtEnd").value;

    const form = new FormData();
    form.append("id", id);
    form.append("numberContainer", numberContainer);
    form.append("type", type);
    form.append("hrStart", hrStart);
    form.append("dtStart", dtStart);
    form.append("hrEnd", hrEnd);
    form.append("dtEnd", dtEnd);

    const url = "http://127.0.0.1:80/crudContainers/controllers/updateMovements.php";

    fetch(url, {
        method: "POST",
        body: form
    }).then(response => {
        response.json().then(data => {
            Swal.fire(data.message);
            showMovements();
            modalUpdateMovement.toggle();
        })
    })
}