function loadTemplate(template_id, data) {
    var template = document.getElementById(template_id).innerHTML;
    return eval('`' + template + '`');
}

function load_usuario(json) {
    let data = json;

//    alert(data.toString())
    
    let html = "";

    data.forEach(function(value,key){
        html += loadTemplate("usuario_template", data[key]);
    });    
    document.getElementById("tbody_usuario").innerHTML = html;
}


function fetch_usuario_json() {
    fetch("http://localhost:3000/user", {
        method:'get',
        headers: new Headers({
            'Access-Control-Allow-Origin': '*'
        })
    }).then(response => response.json()).then(json => {
        console.log(json)
        load_usuario(json);
    });
}

function load_modal_usuario(element){

    let url = "http://localhost:3000/user/" + element.id

    fetch(url, {
        method:'get',
        headers: new Headers({
            'Access-Control-Allow-Origin': '*'
        })
    }).then(response => response.json()).then(user_json => {

        console.log(user_json)
        let name_input = document.getElementById("input_nome_update")
        name_input.value = user_json.name

        let cpf_input = document.getElementById("input_cpf_update")
        cpf_input.value = user_json.cpf

        let id_input = document.getElementById("input_id_update")
        id_input.value = user_json.id
    });
}

function update_usuario(){

    let id = document.getElementById("input_id_update")
    let url = "http://localhost:3000/user/" + id.value
    let new_name = document.getElementById("input_nome_update").value

    let body = {
        "name" : new_name
    }

    fetch(url, {
        method : 'PATCH',
        mode :'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }).then(response => response.json() ).then(json => {
        console.log(json)
    });

}

function delete_usuario(){

    let id = document.getElementById("input_id_update")
    let url = "http://localhost:3000/user/" + id.value

    fetch(url, {
        method : 'DELETE',
    }).then(response => location.reload());

}

function add_usuario(){
    let name_input = document.getElementById("input_nome").value
    
    let cpf_input = document.getElementById("input_cpf").value

    let url = "http://localhost:3000/user"
    
    let body = {
        "name" : name_input,
        "cpf" : cpf_input
    }
    fetch(url, {
        method : 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }).then(response => response.json() ).then(json => {
        console.log(json)
        location.reload();
    });

}

fetch_usuario_json()