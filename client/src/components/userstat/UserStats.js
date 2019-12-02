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
                <Link onClick= {f.signout} to= "/"></Link>
            </div>
            <div className= "buttonRight">
              <Link style={{background:'white',color:'red'}} onClick= {f.signout} to= "/">Cerrar Sesion</Link>
            </div>
            <div class="right">
                <RankingContainer />
            </div>
        </div>
    )
}

export default UserStat
