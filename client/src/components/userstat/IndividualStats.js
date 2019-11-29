import React from 'react'
import style from './style.css'

const IndividualStats = ({ stats }) => {
    if (stats.username) {
      return (
        <div>
          <h1 class="center">{ stats.username }</h1>
          <p class="individualStats">Points: { stats.current_points }</p>
          <p class="individualStats">Created challenges : { stats.created_challenges }</p>
          <p class="individualStats">Solved challenges: { stats.solved_challenges }</p>
          <p class="individualStats">Ranking position: { stats.ranking_position }</p>
        </div>
      );
    } else {
      return (
        <div>
          <p class="individualStats">Login to see your stats</p>
        </div>
      );
    }
  }

  export default IndividualStats
