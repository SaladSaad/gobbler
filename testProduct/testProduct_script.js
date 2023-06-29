const search=()=>{
    const searchbox=document.getElementById("search-item").value.toUpperCase();
    const storeitems=document.getElementById("product-list")
    const product=document.querySelectorAll(".product")
    const pname=storeitems.getElementsByTagName("h2")

    for(var i=0; i< pname.length; i++) {
        let match=product[i].getElementsByTagName('h2')[0]

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}

const resultCardTemplate=document.querySelector("[data-result-template]");
const resultCardContainer=document.querySelector("[data-result-cards-container]");

//movie db options
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTNlY2ZiM2IzNGYyZGRjODhhN2Q5NmJjZjI1YmYyYyIsInN1YiI6IjY0NmVmY2QwMTEzMGJkMDFlYzk3NDgxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uCyfm2IkCQO_h839GWVhTZNyRhLMOd78awOjffRmVvk'
    }
  };
  
  fetch('https://api.themoviedb.org/3/search/movie?query=fight%20club&include_adult=false&language=en&page=1', options)
    .then(response => response.json())
    .catch(err => console.error(err))
    .then(data=>{
        console.log(data)
    })

