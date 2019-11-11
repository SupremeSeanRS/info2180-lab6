function page() {

    document.getElementsByClassName("btn")[0].addEventListener("click", function() {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {
                alert(xhr.responseText);
            }
        };

        xhr.open("GET", "http://localhost:8080/superheroes.php", true);
        xhr.send();
    })
}


window.onload=page;