import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const playerPositions = {
    "Ja'Marr Chase": "WR", "Bijan Robinson": "RB", "Jahmyr Gibbs": "RB", "Saquon Barkley": "RB", "Justin Jefferson": "WR", "CeeDee Lamb": "WR",
    "Malik Nabers": "WR", "Nico Collins": "WR", "Amon-Ra St. Brown": "WR", "Christian McCaffrey": "RB", "Puka Nacua": "WR", "Derrick Henry": "RB", "Brian Thomas Jr.": "WR", "Ashton Jeanty": "RB", "De'Von Achane": "RB",
    "Drake London": "WR", "A.J. Brown": "WR", "Brock Bowers": "TE", "Jonathan Taylor": "RB", "Josh Jacobs": "RB", "Bucky Irving": "RB", "Chase Brown": "RB",
    "Trey McBride": "TE", "Ladd McConkey": "WR", "Kyren Williams": "RB", "Josh Allen": "QB", "Lamar Jackson": "QB", "Jaxon Smith-Njigba": "WR", "Tee Higgins": "WR",
    "Tyreek Hill": "WR", "George Kittle": "TE", "Garrett Wilson": "WR", "Mike Evans": "WR", "Jayden Daniels": "QB", "Davante Adams": "WR", "James Cook": "RB", "Jalen Hurts": "QB",
    "Kenneth Walker III": "RB", "Omarion Hampton": "RB", "Breece Hall": "RB", "Marvin Harrison Jr.": "WR", "Alvin Kamara": "RB", "Terry McLaurin": "WR", "DJ Moore": "WR",
    "DK Metcalf": "WR", "Joe Burrow": "QB", "Chuba Hubbard": "RB", "James Conner": "RB", "Courtland Sutton": "WR",
    "DeVonta Smith": "WR", "Jameson Williams": "WR", "TreVeyon Henderson": "RB", "Tetairoa McMillan": "WR", "Zay Flowers": "WR",
    "Travis Hunter": "WR/CB", "T.J. Hockenson": "TE", "Chris Olave": "WR",
    "Baker Mayfield": "QB", "Kaleb Johnson": "RB", "Jerry Jeudy": "WR", "Rome Odunze": "WR", "Brian Robinson Jr.": "RB", "Tyrone Tracy Jr.": "RB", "Bo Nix": "QB", "Mark Andrews": "TE", "Travis Kelce": "TE",
    "Kyler Murray": "QB", "Joe Mixon": "RB", "Jakobi Meyers": "WR", "Jaylen Warren": "RB", "Stefon Diggs": "WR", "Ricky Pearsall": "WR", "Jordan Addison": "WR", "David Njoku": "TE", "Dak Prescott": "QB", "Travis Etienne Jr.": "RB", "Jauan Jennings": "WR",
    "Evan Engram": "TE", "Jordan Mason": "RB", "Brock Purdy": "QB", "Deebo Samuel Sr.": "WR", "Chris Godwin": "WR", "Khalil Shakir": "WR", "Justin Fields": "QB", "Tucker Kraft": "TE",
    "Justin Herbert": "QB", "Jayden Reed": "WR", "Emeka Egbuka": "WR", "Zach Charbonnet": "RB", "Javonte Williams": "RB", "J.K. Dobbins": "RB", "Rhamondre Stevenson": "RB", "Jared Goff": "QB", "Josh Downs": "WR", "Caleb Williams": "QB", "Drake Maye": "QB", "Matthew Golden": "WR",
    "Tyler Warren": "TE", "Cooper Kupp": "WR", "Jordan Love": "QB", "Michael Pittman Jr.": "WR", "Tank Bigsby": "RB",
    "Jake Ferguson": "TE", "Cam Skattebo": "RB", "Trevor Lawrence": "QB", "Dalton Kincaid": "TE", "Darnell Mooney": "WR", "C.J. Stroud": "QB", "Quinshon Judkins": "RB", "Tyjae Spears": "RB", "Najee Harris": "RB", "Dallas Goedert": "TE", "Rachaad White": "RB",
    "Keon Coleman": "WR", "J.J. McCarthy": "QB", "Brandon Aiyuk": "WR", "Rashid Shaheed": "WR", "Ray Davis": "RB", "Colston Loveland": "TE",
    "Austin Ekeler": "RB", "Christian Kirk": "WR", "Braelon Allen": "RB", "Jaydon Blue": "RB", "Trey Benson": "RB", "Kyle Pitts Sr.": "TE", "Tyler Allgeier": "RB", "Rashod Bateman": "WR", "Tua Tagovailoa": "QB", "Hunter Henry": "TE", "Jerome Ford": "RB", "Luther Burden III": "WR",
    "Cedric Tillman": "WR", "Bryce Young": "QB", "Isaac Guerendo": "RB", "Jayden Higgins": "WR",
    "Rico Dowdle": "RB", "Michael Penix Jr.": "QB", "Marvin Mims Jr.": "WR", "Jonnu Smith": "TE", "Nick Chubb": "RB", "Bhayshul Tuten": "RB", "Jaylen Wright": "RB", "Dylan Sampson": "RB", "Denver Broncos": "DEF",
    "Romeo Doubs": "WR", "Zach Ertz": "TE", "Matthew Stafford": "QB", "Marquise Brown": "WR", "Keenan Allen": "WR",
    "Kyle Williams": "WR", "Geno Smith": "QB", "Wan'Dale Robinson": "WR", "Tre' Harris": "WR", "Adam Thielen": "WR", "Roschon Johnson": "RB", "Jalen McMillan": "WR", "Joshua Palmer": "WR", "Quentin Johnston": "WR", "DeMario Douglas": "WR", "Brenton Strange": "TE", "Philadelphia Eagles": "DEF", "Pittsburgh Steelers": "DEF", "Baltimore Ravens": "DEF", "Minnesota Vikings": "DEF",
    "Xavier Worthy": "WR", "George Pickens": "WR", "Calvin Ridley": "WR", "David Montgomery": "RB", "D'Andre Swift": "RB", "Jaylen Waddle": "WR", "Tony Pollard": "RB", "Sam LaPorta": "TE",
    "Isiah Pacheco": "RB", "Rashee Rice": "WR", "RJ Harvey": "RB", "Aaron Jones Sr.": "RB", "Patrick Mahomes II": "QB",
    "Xavier Legette": "WR", "Blake Corum": "RB", "Houston Texans": "DEF",
    "Cam Ward": "QB", "Sam Darnold": "QB", "Isaiah Likely": "TE", "MarShawn Lloyd": "RB", "DeAndre Hopkins": "WR", "Chig Okonkwo": "TE", "Mike Gesicki": "TE", "Buffalo Bills": "DEF", "Detroit Lions": "DEF", "Kansas City Chiefs": "DEF", "Brandon Aubrey": "K", "Jake Bates": "K", "Cameron Dicker": "K",
    "Pat Freiermuth": "TE", "Alec Pierce": "WR", "Mason Taylor": "TE", "Cade Otton": "TE", "Jalen Coker": "WR", "Justice Hill": "RB", "Aaron Rodgers": "QB"
  };

  const initialTiers = {
    "Tier 1": ["Ja'Marr Chase", "Bijan Robinson", "Jahmyr Gibbs", "Saquon Barkley", "Justin Jefferson", "CeeDee Lamb"],
    "Tier 2": ["Malik Nabers", "Nico Collins", "Amon-Ra St. Brown", "Christian McCaffrey", "Puka Nacua", "Derrick Henry", "Brian Thomas Jr.", "Ashton Jeanty", "De'Von Achane"],
    "Tier 3": ["Drake London", "A.J. Brown", "Brock Bowers", "Jonathan Taylor", "Josh Jacobs", "Bucky Irving", "Chase Brown"],
    "Tier 4": ["Trey McBride", "Ladd McConkey", "Kyren Williams", "Josh Allen", "Lamar Jackson", "Jaxon Smith-Njigba", "Tee Higgins"],
    "Tier 5": ["Tyreek Hill", "George Kittle", "Garrett Wilson", "Mike Evans", "Jayden Daniels", "Davante Adams", "James Cook", "Jalen Hurts"],
    "Tier 6": ["Kenneth Walker III", "Omarion Hampton", "Breece Hall", "Marvin Harrison Jr.", "Alvin Kamara", "Terry McLaurin", "DJ Moore"],
    "Tier 7": ["DK Metcalf", "Joe Burrow", "Chuba Hubbard", "James Conner", "Courtland Sutton"],
    "Tier 8": ["DeVonta Smith", "Jameson Williams", "TreVeyon Henderson", "Tetairoa McMillan", "Zay Flowers"],
    "Tier 9": ["Xavier Worthy", "George Pickens", "Calvin Ridley", "David Montgomery", "D'Andre Swift", "Jaylen Waddle", "Tony Pollard", "Sam LaPorta"],
    "Tier 10": ["Isiah Pacheco", "Rashee Rice", "RJ Harvey", "Aaron Jones Sr.", "Patrick Mahomes II"],
    "Tier 11": ["Travis Hunter", "T.J. Hockenson", "Chris Olave"],
    "Tier 12": ["Baker Mayfield", "Kaleb Johnson", "Jerry Jeudy", "Rome Odunze", "Brian Robinson Jr.", "Tyrone Tracy Jr.", "Bo Nix", "Mark Andrews", "Travis Kelce"],
    "Tier 13": ["Kyler Murray", "Joe Mixon", "Jakobi Meyers", "Jaylen Warren", "Stefon Diggs", "Ricky Pearsall", "Jordan Addison", "David Njoku", "Dak Prescott", "Travis Etienne Jr.", "Jauan Jennings"],
    "Tier 14": ["Evan Engram", "Jordan Mason", "Brock Purdy", "Deebo Samuel Sr.", "Chris Godwin", "Khalil Shakir", "Justin Fields", "Tucker Kraft"],
    "Tier 15": ["Justin Herbert", "Jayden Reed", "Emeka Egbuka", "Zach Charbonnet", "Javonte Williams", "J.K. Dobbins", "Rhamondre Stevenson", "Jared Goff", "Josh Downs", "Caleb Williams", "Drake Maye", "Matthew Golden"],
    "Tier 16": ["Tyler Warren", "Cooper Kupp", "Jordan Love", "Michael Pittman Jr.", "Tank Bigsby"],
    "Tier 17": ["Jake Ferguson", "Cam Skattebo", "Trevor Lawrence", "Dalton Kincaid", "Darnell Mooney", "C.J. Stroud", "Quinshon Judkins", "Tyjae Spears", "Najee Harris", "Dallas Goedert", "Rachaad White"],
    "Tier 18": ["Keon Coleman", "J.J. McCarthy", "Brandon Aiyuk", "Rashid Shaheed", "Ray Davis", "Colston Loveland"],
    "Tier 19": ["Austin Ekeler", "Christian Kirk", "Braelon Allen", "Jaydon Blue", "Trey Benson", "Kyle Pitts Sr.", "Tyler Allgeier", "Rashod Bateman", "Tua Tagovailoa", "Hunter Henry", "Jerome Ford", "Luther Burden III"],
    "Tier 20": ["Cedric Tillman", "Bryce Young", "Isaac Guerendo", "Jayden Higgins"],
    "Tier 21": ["Rico Dowdle", "Michael Penix Jr.", "Marvin Mims Jr.", "Jonnu Smith", "Nick Chubb", "Bhayshul Tuten", "Jaylen Wright", "Dylan Sampson", "Denver Broncos"],
    "Tier 22": ["Romeo Doubs", "Zach Ertz", "Matthew Stafford", "Marquise Brown", "Keenan Allen"],
    "Tier 23": ["Kyle Williams", "Geno Smith", "Wan'Dale Robinson", "Tre' Harris", "Adam Thielen", "Roschon Johnson", "Jalen McMillan", "Joshua Palmer", "Quentin Johnston", "DeMario Douglas", "Brenton Strange", "Philadelphia Eagles", "Pittsburgh Steelers", "Baltimore Ravens", "Minnesota Vikings"],
    "Tier 24": ["Xavier Legette", "Blake Corum", "Houston Texans"],
    "Tier 25": ["Cam Ward", "Sam Darnold", "Isaiah Likely", "MarShawn Lloyd", "DeAndre Hopkins", "Chig Okonkwo", "Mike Gesicki", "Buffalo Bills", "Detroit Lions", "Kansas City Chiefs", "Brandon Aubrey", "Jake Bates", "Cameron Dicker"],
    "Tier 26": ["Pat Freiermuth", "Alec Pierce", "Mason Taylor", "Cade Otton", "Jalen Coker", "Justice Hill", "Aaron Rodgers"]
  };

  const defaultSelectedPlayers = [
    "Jahmyr Gibbs",
    "Amon-Ra St. Brown", 
    "De'Von Achane",
    "Ja'Marr Chase",
    "CeeDee Lamb",
    "Lamar Jackson",
    "Malik Nabers",
    "Nico Collins",
    "DeVonta Smith",
    "Jonathan Taylor",
    "James Cook",
    "Josh Allen",
    "DJ Moore",
    "Rashee Rice",
    "Puka Nacua",
    "Xavier Worthy",
    "Brock Bowers",
    "Bijan Robinson",
    "Tee Higgins",
    "Brian Thomas Jr.",
    "Calvin Ridley",
    "Joe Burrow",
    "Jameson Williams",
    "Chase Brown",
    "Jared Goff",
    "Chuba Hubbard",
    "Ladd McConkey",
    "Justin Jefferson",
    "J.K. Dobbins",
    "Jayden Daniels",
    "Bucky Irving",
    "Bo Nix",
    "Tucker Kraft",
    "Jauan Jennings"
  ];

  const [playerStatus, setPlayerStatus] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('draftTracker');
    const savedTheme = localStorage.getItem('darkMode');
    
    console.log('Loading saved data:', savedData);
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        console.log('Parsed data:', parsed);
        setPlayerStatus(parsed);
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    } else {
      // Set default player statuses if no saved data exists
      const defaultStatus = {};
      defaultSelectedPlayers.forEach(player => {
        defaultStatus[player] = 'others';
      });
      setPlayerStatus(defaultStatus);
      console.log('Set default player statuses for:', defaultSelectedPlayers.length, 'players');
    }

    if (savedTheme !== null) {
      setIsDarkMode(savedTheme === 'true');
    }
  }, []);

  useEffect(() => {
    if (Object.keys(playerStatus).length > 0) {
      console.log('Saving player status:', playerStatus);
      localStorage.setItem('draftTracker', JSON.stringify(playerStatus));
    }
  }, [playerStatus]);

  const handlePlayerDraft = (playerName, status) => {
    setPlayerStatus(prev => ({
      ...prev,
      [playerName]: prev[playerName] === status ? 'undrafted' : status
    }));
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to clear all draft selections? This cannot be undone.')) {
      setPlayerStatus({});
      localStorage.removeItem('draftTracker');
      console.log('Draft selections cleared');
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const getPlayerStatus = (playerName) => {
    return playerStatus[playerName] || 'undrafted';
  };

  const getPlayerClass = (playerName) => {
    const status = getPlayerStatus(playerName);
    const position = playerPositions[playerName] || 'N/A';
    let statusClass;
    switch (status) {
      case 'mine': statusClass = 'player-mine'; break;
      case 'others': statusClass = 'player-others'; break;
      default: statusClass = 'player-undrafted'; break;
    }
    
    let positionClass;
    if (position.includes('QB')) positionClass = 'position-qb';
    else if (position.includes('RB')) positionClass = 'position-rb';
    else if (position.includes('WR')) positionClass = 'position-wr';
    else if (position.includes('TE')) positionClass = 'position-te';
    else if (position.includes('K')) positionClass = 'position-k';
    else if (position.includes('DEF')) positionClass = 'position-def';
    else positionClass = 'position-na';
    
    return `${statusClass} ${positionClass}`;
  };

  const getMyPlayers = () => {
    const myPlayers = [];
    Object.entries(initialTiers).forEach(([tierName, players]) => {
      players.forEach(player => {
        if (getPlayerStatus(player) === 'mine') {
          myPlayers.push({ name: player, position: playerPositions[player] || 'N/A', tier: tierName });
        }
      });
    });
    return myPlayers.sort((a, b) => {
      const tierOrder = { 'QB': 1, 'RB': 2, 'WR': 3, 'TE': 4, 'K': 5, 'DEF': 6 };
      return (tierOrder[a.position] || 7) - (tierOrder[b.position] || 7);
    });
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="sidebar">
        <div className="sidebar-content">
          <h3>My Team ({getMyPlayers().length})</h3>
          <div className="my-players-list">
            {getMyPlayers().length > 0 ? (
              getMyPlayers().map((player, index) => (
                <div key={player.name} className={`my-player position-${player.position.toLowerCase()}`}>
                  <div className="my-player-name">{player.name}</div>
                  <div className="my-player-position">({player.position})</div>
                </div>
              ))
            ) : (
              <div className="no-players">No players drafted yet</div>
            )}
          </div>
        </div>
      </div>
      <div className="main-content">
        <header className="draft-header">
          <div className="header-content">
            <h1>Lauren, Frank, and Ryker's Draft Tracker</h1>
            <p className="header-subtitle">Fantasy Football Draft Board</p>
          </div>
          <div className="header-buttons">
            <button className="theme-toggle-button" onClick={toggleDarkMode}>
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button className="reset-button" onClick={handleReset}>
              Reset All Selections
            </button>
          </div>
        </header>
        <main className="draft-content">
        {Object.entries(initialTiers).map(([tierName, players]) => (
          <div key={tierName} className="tier-section">
            <h2>{tierName}</h2>
            <div className="players-grid">
              {players.map((player) => (
                <div key={player} className={`player-card ${getPlayerClass(player)}`}>
                  <div className="player-name">{player} ({playerPositions[player] || 'N/A'})</div>
                  <div className="player-buttons">
                    <button 
                      className={`draft-btn mine-btn ${getPlayerStatus(player) === 'mine' ? 'active' : ''}`}
                      onClick={() => handlePlayerDraft(player, 'mine')}
                    >
                      My Pick
                    </button>
                    <button 
                      className={`draft-btn others-btn ${getPlayerStatus(player) === 'others' ? 'active' : ''}`}
                      onClick={() => handlePlayerDraft(player, 'others')}
                    >
                      Others
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        </main>
      </div>
    </div>
  );
}

export default App;
