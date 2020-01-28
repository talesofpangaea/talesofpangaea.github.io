/*  This is a template JS controls v3.3
 *  by Avicus Delacroix (Discord: Avicus#1172)
 */

function top_go(){
    document.getElementById("top").style.display = "block";
    document.getElementById("story").style.display = "none";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("title").innerHTML = "Tales of Pangaea";
};
function story_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("story").style.display = "block";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("title").innerHTML = "Tales of Pangaea — Story";
};
function races_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("races").style.display = "block";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("title").innerHTML = "Tales of Pangaea — Races";
};
function classes_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "block";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("title").innerHTML = "Tales of Pangaea — Classes";
};
function demo_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "block";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("title").innerHTML = "Tales of Pangaea — Demo";
};
function donate_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "block";
    document.getElementById("contacts").style.display = "none";
    document.getElementById("title").innerHTML = "Tales of Pangaea — Support our project";
};
function contacts_go(){
    document.getElementById("top").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("races").style.display = "none";
    document.getElementById("classes").style.display = "none";
    document.getElementById("demo").style.display = "none";
    document.getElementById("donate").style.display = "none";
    document.getElementById("contacts").style.display = "block";
    document.getElementById("title").innerHTML = "Tales of Pangaea — Contacts";
};