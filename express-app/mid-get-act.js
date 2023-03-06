const express = require('express');
const app = express();
//
const movies = [
    {
      id: 1,
      title: 'Superman',
    },
    {
      id: 2,
      title: 'Thor',
    },
    {
      id: 3,
      title: 'Iron Man',
    },
    {
      id: 4,
      title: 'Captain America',
    },
  ];
  
  //
 app.get('/api/movies', (req, res) => {
    res.send(movies);
  });
  
  
  
//   //get movie by id
// app.get('/api/movies/:id', (req, res) => {
//     const movie = movies.find((h) => h.id === parseInt(req.params.id));
//     if (!movie)
//       return res.status(404).send('The movie with the given ID was not found.');
//     res.send(movie);
//   });
  
   //get movie by title
 app.get('/api/movies/search/:title', (req, res) => {
    const movie = movies.find((a) => a.title === parseInt(req.params.title));
    if (!movie)
      return res.status(404).send('The movie with the given Title was not found.');
    res.send(movie);
  });
  
  app.listen(4000, () => console.log('Listening on port 4000'));