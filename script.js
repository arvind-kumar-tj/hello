function currrentDate() {
    var d = new Date();
    console.log(d)
    document.getElementById("current_date").innerHTML = d.getFullYear();
}
currrentDate();