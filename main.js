const leftTarget = document.getElementById("left-target");

leftTarget.addEventListener("click", function(e){
    const html = document.getElementsByTagName("html")[0];
    const screenWidth = html.clientWidth;
    if (screenWidth > 600){
        e.preventDefault();
    }
    const newPage = leftTarget.href;
    const container = document.getElementsByClassName("landing-client-l")[0];
    container.classList.add("grow");
    console.log(newPage)
    console.log(container)
    setTimeout(() => {
        window.location.href= newPage;
    }, 2000);
})

