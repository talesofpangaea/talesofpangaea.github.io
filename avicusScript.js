function ru_go(){
    window.alert("Russian version is not released yet!\nРусская версия ещё не готова!");
};
function top_go(){
    document.getElementById("top").style.display = "block";
    document.getElementById("lore").style.display = "none";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("aviTitle").innerHTML = "Tales of Pangaea";
};
function lore_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("lore").style.display = "block";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("aviTitle").innerHTML = "ToP: Lore";
};
function races_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("lore").style.display = "none";
    document.getElementById("races").style.display = "block";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("aviTitle").innerHTML = "ToP: Races";
};
function classes_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("lore").style.display = "none";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "block";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("aviTitle").innerHTML = "ToP: Classes";
};
function demo_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("lore").style.display = "none";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "block";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("aviTitle").innerHTML = "ToP: Demo";
};
function donate_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("lore").style.display = "none";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "block";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("aviTitle").innerHTML = "ToP: Support our project";
};
function contacts_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("lore").style.display = "none";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "block";
    document.getElementById("aviTitle").innerHTML = "ToP: Contacts";
};
