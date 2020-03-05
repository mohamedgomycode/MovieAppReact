import React, {Component} from "react";
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'
import Modal from './Modal'
import MovieCard from './MovieCard'
import './MovieApp.css'

const flash = {
  title: "The Flash",
  year: 2014,
  image:
    "https://img.over-blog-kiwi.com/1/88/59/62/20180714/ob_e113d0_affiche-flash.jpg",
  rating: 5
};
const arrow = {
  title: "Arrow",
  year: 2017,
  image:
    "https://vignette.wikia.nocookie.net/arrow-france/images/c/c7/Arrow_season_7.jpg/revision/latest?cb=20190617164543&path-prefix=fr",
  rating: 4
};
const Supergirl = {
  title: "Supergirl",
  year: 2017,
  image:
    "https://media.senscritique.com/media/000016457891/source_big/Supergirl.jpg",
  rating: 1
};
const got = {
  title: "Game Of Thrones",
  year: 2013,
  image:
    "https://media.senscritique.com/media/000004080454/source_big/Game_of_Thrones.jpg",
  rating: 4
};

const smallville = {
  title: "SmallVille",
  year: 2010,
  image:
    "data:image/jpeg;base64,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",
  rating: 4
};
const lacasa = {
  title: "La casa del papel",
  year: 2017,
  image:
    "https://img.over-blog-kiwi.com/1/17/37/73/20180331/ob_af761c_la-casa-de-papel-temporada-2-online.jpg",
  rating: 2
};
const Rebot = {
  title: "Mr Rebot",
  year: 2019,
  image: "https://fr.web.img3.acsta.net/pictures/15/05/06/16/13/020977.jpg",
  rating: 3
};
const legends = {
    title: "legends of tomorrow",
    year: 2019,
    image: "https://static1.purebreak.com/articles/4/17/61/34/@/674062-legends-of-tomorrow-saison-4-un-person-diapo-1.jpg",
    rating: 4
  };
  const supernatural = {
    title: "Supernatural",
    year: 2013,
    image: "https://fr.web.img3.acsta.net/pictures/18/10/30/12/05/0105680.jpg",
    rating: 3
  };
  const dark = {
    title: "Dark",
    year: 2017,
    image: "https://m.media-amazon.com/images/I/B1cB5pEqr2S._SS500_.jpg",
    rating: 5
  };
  const stranger = {
    title: "Stranger Things",
    year: 2016,
    image: "https://fr.web.img6.acsta.net/pictures/17/10/23/14/24/5968627.jpg",
    rating: 4
  };
  const naruto = {
    title: "Naruto",
    year: 2006,
    image: "https://media.senscritique.com/media/000010686578/source_big/Naruto_Shippuden.jpg",
    rating: 3
  };


const moviesToDisplay = [ arrow, flash, Supergirl, got, lacasa, smallville, Rebot ,legends ,supernatural,dark,stranger,naruto]

class MovieApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 3,
      movies: moviesToDisplay,
      titleFilter: '',
      rating:0,
      movies:moviesToDisplay
    }
  }
  
  onStarClick =(nextValue, prevValue, name) => {
    this.setState({rating: nextValue});
  }

  onChangeName=(e)=>{
    this.setState({titleFilter:e.target.value})
  }

  addMovie = newMovie => this.setState({ movies: [...this.state.movies, newMovie] });
  render() {
    const { rating } = this.state;
    const {title}=this.state;
    return (
      <div className="movie-app">
        <header className="movie-app-header">
          <NameFilter
            value={title}
            onChange={this.onChangeName} />
          <RatingFilter 
          value={rating}
          onStarClick={this.onStarClick} />
        </header>
        <main className="movie-app-main">
            <MovieList movie={this.state.movies} titleFilter={this.state.titleFilter} rating={this.state.rating}/>
               <Modal handelSubmit={this.handelSubmit}  addMovie={this.addMovie} />
           

        </main>
      </div>
    )
  }
}

export default MovieApp;
