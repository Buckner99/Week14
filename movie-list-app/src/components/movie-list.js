//MovieList - A container for all the movie components and their data

import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
  render() {
    //This component should render Movie components
    //Those Movie components have their own data
    //At a minimum, this component must render Movies, which will house their own data

    /**
     * Movie-Lists are the topmost parent for this React website
     * Their direct children are Movie components, since a movie list will render Movie components.
     * The ratings, summary, imageURL, and title are hard coded because it was easier to manage and get started with
     * Future iterations of a project like this could have functionality
     * for users to add more movies to the list of movies, or delete them???
     */
    return (
      <div>
        <div className="introduction">
          <h1>Welcome to Movie Reviews!</h1>
          <p>
            This website allows users to view info on movies, and then leave
            reviews on them. <br />
            <i>Movie info obtained from imdb.com</i>
          </p>
        </div>
        <Movie
          title="Only The Brave"
          imageURL="https://m.media-amazon.com/images/M/MV5BNjQyMjgyNDEtZDBmYi00ZGI1LTk2YjMtOTVhOTVkMmU5YWZmXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg"
          summary="Through hope, determination, sacrifice and the drive to protect families and communities, the Granite Mountain Hotshots become one of the most elite firefighting teams
           in the United States. While most people run from danger they run toward it, watching over lives, homes and everything people hold dear, while forging a unique brotherhood that 
           comes into focus with one fateful fire in Yarnell, Arizona."
          alt="A image of Only The Brave"
          rating={5}
        />
        <Movie
          title="Backdraft"
          imageURL="https://upload.wikimedia.org/wikipedia/en/a/a1/Backdraft_poster.jpg"
          summary="Chicago firefighting brothers Stephen (Kurt Russell) and Brian (William Baldwin) have been rivals since childhood. Brian, struggling to prove himself, transfers to the arson unit.
           There he aids Don (Robert De Niro) in his investigation into a spate of fires involving oxygen-induced infernos called backdrafts. But when a conspiracy implicating a crooked politician and
            an arsonist leads Brian back to Stephen, he is forced to overcome his brotherly competitiveness in order to crack the case."
          rating={4}
        />
        <Movie
          title="Ladder 49"
          imageURL="https://fireandaxes.com/wp-content/uploads/2017/04/poster-780.jpg"
          summary="After saving the life of one of the civilians inside, firefighter Jack Morrison (Joaquin Phoenix) finds himself trapped in a burning warehouse with a broken leg. As his friend and 
          mentor, Deputy Chief Mike Kennedy (John Travolta), tries to negotiate a rescue from without, Jack flashes back to various events in his life: the first, awkward days on the force, meeting 
          the woman (Jacinda Barrett) who would become his wife and saving a small 
          girl from a burning building."
          rating={3}
        />
      </div>
    );
  }
}