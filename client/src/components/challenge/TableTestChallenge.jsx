import React from 'react';
import './Style.css';


const TableTestChallenge = ({ listTestChallenge, showStatsHandler }) => {
  const testChallengeList = listTestChallenge.map(challenge => {
    return (
      <tr key = {challenge.id} >
        <td>{challenge.id}</td>
        <td>{challenge.title}</td>
        <td>{challenge.description}</td>
        <td>{challenge.point}</td>
        <td>
          <button className="button-table"> VIEW SOURCE AND TEST </button>
        </td>
        <td>
          <button onClick={showStatsHandler(challenge.id)}>Stats </button>
        </td>
      </tr>
    )
  });
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
          { testChallengeList }
        </tbody>
      </table>
    </div>
  )
}

export default TableTestChallenge;
