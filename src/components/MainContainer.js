import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movie?.nowPlayingMovies);

  if (!nowPlayingMovies || nowPlayingMovies.length < 5) {
    return <div>Loading...</div>; // Display loading indicator or error message
  }

  const { overview, id, title } = nowPlayingMovies[4];

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
