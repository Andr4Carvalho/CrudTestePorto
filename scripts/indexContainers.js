// Criar container
function createContainer(){
    const client = document.getElementById("inputClient").value;
    const numberContainer = document.getElementById("inputNumberContainer").value;
    const type = document.getElementById("selectTypeContainer").value;
    const status = document.getElementById("selectStatusContainer").value;
    const category = document.getElementById("selectCategoryContainer").value;

    if(numberContainer.length < 11){
        Swal.fire("Número de container inválido");
        return 0;
    }

    const form = new FormData();

    form.append("client", client);
    form.append("numberContainer", numberContainer);
    form.append("type", type);
    form.append("status", status);
    form.append("category", category);

    const url = "http://127.0.0.1:80/crudContainers/controllers/createContainers.php";

    fetch(url, {
        method: "POST",
        body: form
    }).then(response => {
        response.json().then(result => {
            showContainers();
            Swal.fire(result.message);
        })
    }).catch(err => Swal.fire(err));
}

// Listar containers
function showContainers(){
    const url = "http://127.0.0.1:80/crudContainers/controllers/readContainers.php";

    fetch(url, {
        method: "GET"
    }).then(response => response.text()).then(response => tableContainers.innerHTML = response).catch(err => Swal.fire(err));
}

// Deletar container
function deleteContainer(id){
    const form = new FormData();
    form.append ("id", id);

    const url = "http://127.0.0.1:80/crudContainers/controllers/deleteContainers.php";

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
                    showContainers();
                })
            }).catch(err => Swal.fire(err))
        }
    })
}

// Atualizar Container
function fillModalUpdateContainer(id){
    const form = new FormData();
    form.append ("id", id);

    const url = "http://127.0.0.1:80/crudContainers/controllers/fillModalUpdateContainer.php";

    fetch(url, {
        method: "POST",
        body: form
    }).then(response => {
        response.json().then(data => {
            const id = document.getElementById("inputUpdateID");
            const client = document.getElementById("inputUpdateClient");
            const numberContainer = document.getElementById("inputUpdateNumberContainer");
            const type = document.getElementById("selectUpdateTypeContainer");
            const status = document.getElementById("selectUpdateStatusContainer");
            const category = document.getElementById("selectUpdateCategoryContainer");

            id.value = data[0]["ID"];
            client.value = data[0]["client"];
            numberContainer.value = data[0]["numberContainer"];
            type.value = data[0]["type"];
            status.value = data[0]["status"];
            category.value = data[0]["category"];

            modalUpdateContainer.show();
        })
    })
}

function updateContainer(){
    const id = document.getElementById("inputUpdateID").value;
    const client = document.getElementById("inputUpdateClient").value;
    const numberContainer = document.getElementById("inputUpdateNumberContainer").value;
    const type = document.getElementById("selectUpdateTypeContainer").value;
    const status = document.getElementById("selectUpdateStatusContainer").value;
    const category = document.getElementById("selectUpdateCategoryContainer").value;

    const form = new FormData();
    form.append("id", id);
    form.append("client", client);
    form.append("numberContainer", numberContainer);
    form.append("type", type);
    form.append("status", status);
    form.append("category", category);

    const url = "http://127.0.0.1:80/crudContainers/controllers/updateContainer.php";

    fetch(url, {
        method: "POST",
        body: form
    }).then(response => {
        response.json().then(data => {
            Swal.fire(data.message);
            showContainers();
            modalUpdateContainer.toggle();
        })
    })
}