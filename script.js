function unlock() {

    document.getElementById("opening").style.display = "none";

    document.getElementById("surprise").style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function showSecret() {

    document.getElementById("secret").style.display = "block";

    document.querySelector(".secret-btn").style.display = "none";

    setTimeout(function() {

        document.getElementById("secret").scrollIntoView({
            behavior: "smooth"
        });

    }, 100);
}