const baseUrl = 'https://api.genshin.dev/';

    fetch(`${baseUrl}characters`)
        .then((res) => {
            return res.json();
        }).then(data => {nationData(data)
        }).catch(() => {
        });
        let nationData = (data) => {
          data.forEach(element => {
            fetch(`${baseUrl}characters/${element}`)
            .then((result) => {
              console.log('resolved', result);
              return result.json();
            }).then(detail => {chardetail(detail)
            }).catch((error) => {
                console.log('rejected', error);
            });

            const listCharacter = document.getElementById('character');
            listCharacter.innerHTML = '';

            let chardetail = (detail) => {
                listCharacter.innerHTML += `
                <div class="col s9 m6 l4">
                  <div class="card">
                    <div class="card-image">
                    </div>
                    <div id="char" class="card-content">
                      <h6>${detail.name} - ${detail.nation}</h6>
                      <h7>${detail.vision}</h7>
                      <h7>${detail.weapon}</h7>
                    </div>
                    <div class="card-action">
                      <a href="https://genshin-impact.fandom.com/wiki/${detail.name}">Character Detail</a>
                    </div>
                  </div>
                </div>
              </div>`;
            }
            });
    }