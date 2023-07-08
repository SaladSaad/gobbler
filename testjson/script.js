const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTNlY2ZiM2IzNGYyZGRjODhhN2Q5NmJjZjI1YmYyYyIsInN1YiI6IjY0NmVmY2QwMTEzMGJkMDFlYzk3NDgxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uCyfm2IkCQO_h839GWVhTZNyRhLMOd78awOjffRmVvk'
    }
  };
  
  fetch('https://api.themoviedb.org/3/search/movie?query=john%20wick&include_adult=false&language=en-US&page=1', options)
    .then(response => response.json())
    .then(json => {
        //const movies=json.results.map(json.results.title, json.results.id)
        console.log(json.results);
        });
    
   // .then(response => console.log(Object.values(response.results).map(([0, original_title]) => original_title)))

/*
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=> response.json())
   .then(json => {
    console.log(json);
   })
   */