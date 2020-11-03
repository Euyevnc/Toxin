import "./WebsitePages.scss";
document.addEventListener('DOMContentLoaded', e=>{
    document.querySelector(".wrapper").classList.add("openuikit")

    ui.addEventListener("click", e=>{
        document.querySelector(".wrapper").classList.add("openuikit")
        document.querySelector(".wrapper").classList.remove("openwebsite")

    })

    pages.addEventListener("click", e=>{
        document.querySelector(".wrapper").classList.add("openwebsite")
        document.querySelector(".wrapper").classList.remove("openuikit")

    })
})