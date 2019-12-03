import React from "react";
import RankingContainer from './RankingContainer'
import { Link } from 'react-router-dom'
import IndividualStatsContainer from './IndividualStatsContainer'
import style from './style.css'
import f  from '../Authorization';

const UserStat = (props) => {
    return (
        <div>
            <div class="left">
                <IndividualStatsContainer />
            </div>    
            <div class="right">
                <RankingContainer />
            </div>
        </div>
    )
}

export default UserStat
