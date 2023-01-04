import {mondo, liyue, inazuma} from '../script/data-source';

document.getElementById('mondo-img').innerHTML += `
<img src="${mondo}">`;
document.getElementById('liyue-img').innerHTML += `
<img src="${liyue}">`;
document.getElementById('inazuma-img').innerHTML += `
<img src="${inazuma}">`;

const createCard = (region, img, reg) => {
  fetch('https://api.genshin.dev/nations/' + reg)
      .then((res) => {
          console.log('resolved', res);
          return res.json();
      }).then(data => {nationData(data)
      }).catch((error) => {
          console.log('rejected', error);
      });
      let nationData = (data) => {
        document.getElementById(region).onclick = () => {
          document.getElementById("nation").innerHTML = '';
          document.getElementById("nation").innerHTML += `<section>
          <div class="section">
            <h3>${data.name}</h3>
            <div class="row">
              <div class="col l7 m6 right-align valign-wrapper">
                <img class="z-depth-3" src="${img}" alt="{img.nation}" width="100%" height="100%">
              </div>
              <div class="col l4 offset-l1 m6 left-align valign-wrapper">
                <div class="this-panel">
                  <div id="reg-card" class="card-panel z-depth-5">
                    <table id="table-region">
                    <h4>Nation Data</h4>
                    <tr>
                      <th>Nation Name</th>
                      <th>${data.name}</th>
                    </tr>
                    <tr>
                      <th>Archon </th>
                      <th>${data.archon}</th>
                    </tr>
                    <tr>
                      <th>Element </th>
                      <th>${data.element}</th>
                    </tr>
                    <tr>
                      <th>Controlling Entity </th>
                      <th>${data.controllingEntity}</th>
                    </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class='divider'></div>`;
        }
      }
}
document.getElementById("mondo").addEventListener("click", createCard('mondo', mondo, 'mondstadt'));
document.getElementById("liyue").addEventListener("click", createCard('liyue', liyue, 'liyue'));
document.getElementById("inazuma").addEventListener("click", createCard('inazuma', inazuma, 'inazuma'));
