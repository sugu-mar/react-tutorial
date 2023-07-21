import './App.css'
import { React, useEffect, useState } from 'react'
import { Msg } from './components/Msg'
import { ColorGame } from './components/ColorGame'
import { Counter } from './components/Counter'

const initialMovieList = [
  {
    name: 'RRR',
    poster:
      'https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG',
    rating: 8.8,
    summary:
      'RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.',
    trailer: 'https://www.youtube.com/embed/f_vbAtFSEc0',
  },
  {
    name: 'Interstellar',
    poster: 'https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg',
    rating: 8.6,
    summary:
      'When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.',
    trailer: 'https://www.youtube.com/embed/zSWdZVtXT7E',
  },
  {
    name: 'Baahubali',
    poster: 'https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg',
    rating: 8,
    summary:
      'In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.',
    trailer: 'https://www.youtube.com/embed/sOEg_YZQsTI',
  },
  {
    name: 'The Avengers',
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg',
    trailer: 'https://www.youtube.com/embed/eOrNdBpGMv8',
  },
  {
    name: 'Iron man 2',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg',
    rating: 7,
    summary:
      'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.',
    trailer: 'https://www.youtube.com/embed/wKtcmiifycU',
  },
  {
    name: 'No Country for Old Men',
    poster:
      'https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg',
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: 'https://www.youtube.com/embed/38A__WT3-o0',
  },
  {
    name: 'Jai Bhim',
    poster:
      'https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg',
    summary:
      'A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case',
    rating: 8.8,
    trailer: 'https://www.youtube.com/embed/nnXpbTFrqXA',
  },

  {
    name: 'Ratatouille',
    poster:
      'https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=',
    rating: 8,
    summary:
      'Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.',
    trailer: 'https://www.youtube.com/embed/NgsQ8mVkN8w',
  },
]

function App() {
  const movieList = initialMovieList

  // const user = [
  //   {
  //     name: 'sachin',
  //     pic:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/330px-Sachin-Tendulkar_%28cropped%29.jpg',
  //   },
  //   {
  //     name: 'dhoni',
  //     pic:
  //       'https://upload.wikimedia.org/wikipedia/commons/7/70/Mahendra_Singh_Dhoni_January_2016_%28cropped%29.jpg',
  //   },
  //   {
  //     name: 'vk',
  //     pic:
  //       'https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg',
  //   },
  //   {
  //     name: 'rohit',
  //     pic:
  //       'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg/330px-Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg',
  //   },
  // ]

  return (
    <div className="App">
      {/* <Welcome name={name} /> */}
      {/* <Msg
        name="sachin"
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/330px-Sachin-Tendulkar_%28cropped%29.jpg"
      />
      <Msg
        name="dhoni"
        pic="https://upload.wikimedia.org/wikipedia/commons/7/70/Mahendra_Singh_Dhoni_January_2016_%28cropped%29.jpg"
      />
      <Msg
        name="vk"
        pic="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg"
      />
      <Msg
        name="rohit"
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg/330px-Rohit_Sharma_during_the_India_vs_Australia_4th_Test_match_at_Narendra_Modi_Stadium.jpg"
      /> */}

      {/* enable once movie completed */}

      {/* {user.map((e, index) => (
        <Msg name={e.name} pic={e.pic} key={index} />
      ))}
      <ColorGame /> */}
      <div className="movie-list">
        {movieList.map((mov, index) => (
          <Movie movie={mov} key={index} />
        ))}
      </div>
    </div>
  )
}

function Movie({ movie }) {
  const [show, setShow] = useState(true)
  // const togglebtnstyle = {
  //   display: show ? 'block' : 'none',
  // }
  return (
    <div className="movie-container ">
      <img src={movie.poster} className="movie-poster" />
      <div className="movie-bar">
        <h2 className="movie-title">{movie.name}</h2>
        <p className="movie-rating">{movie.rating}</p>
      </div>
      <button onClick={() => setShow(!show)}>
        {show ? 'hide description' : 'show description'}
      </button>
      {/* <p className="movie-summary" style={togglebtnstyle}>
        {movie.summary}
      </p> */}

      {show ? <p className="movie-summary">{movie.summary}</p> : ''}

      <Counter />
    </div>
  )
}

export default App
