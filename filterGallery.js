class filterGallery{
    createGallery(){
            let filter = document.querySelector(".gallery-filter");
            let galleryItems = document.querySelectorAll(".gallery-item");
            filter.addEventListener("click",(event)=>{
            console.log(event.target.dataset.filter)
            if(event.target.classList.contains("filter-item")){
            filter.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");
            const filtervalue = event.target.getAttribute("data-filter");
            galleryItems.forEach((item) => {
                console.log(item)
                // if data-filter value is renault or dacia or volswagen || or if the data-filter value is "tout"
                if(filtervalue=="tout"||item.classList.contains(filtervalue)){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            });
          }
       },false)
    }
}
