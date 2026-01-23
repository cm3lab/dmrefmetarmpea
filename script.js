const press = document.getElementById("submit")

press.addEventListener("click", result)

function result(){
    let username = document.getElementById("passwordinput").value;
    if (username === "1stDMREF@OU"){
        window.location.href = "TeamWorkspacePass1.html"
    }
    else{
        document.getElementById("passwordinput").value = "";
        document.getElementById("wrong").textContent = "WRONG PASSWORD"
    }
}
