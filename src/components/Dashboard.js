import React, {Component} from 'react';
import Volume from './Volume';
import Online from './Online';
import Sound from './Sound';


class Dashboard extends Component {

    
  
    render(){
    return (
        <div class="dashboard">
            <div class="bar"><h2>Dashboard</h2></div>
            <div class="pieces">
                <div class="online box">
                    <h3>Online Mode</h3>
                    <Online />
                 </div>
                 <div class="volume box">
                     <h3>Adjust Volume</h3>
                     <Volume />
                 </div>
                <div class="sound box">
                        <h3>Sound Quality</h3>
                        <Sound />
                </div>
            </div>
            <div class="notifications">
                    <h2>System Notifications:</h2>
                </div>
        </div>
    );
  }
  }
  export default Dashboard;