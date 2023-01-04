const baseUrl = 'https://nba-players.herokuapp.com/';

    fetch(`${baseUrl}players-stats`)
        .then((res) => {
            return res.json();
        }).then(data => {player(data)
        });
    let player = (data) => {
        for(var i = 0; i < data.length; i++){
            console.log(data[i].name);
        }
    };