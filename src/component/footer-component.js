class footer extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML =`
        <footer class="page-footer indigo lighten-2">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Genshin Impact Web Theme</h5>
              <p class="grey-text text-lighten-4">Dicoding - Submisi 3</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Contact</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="https://github.com/shrchse">Github - Shrchse.lin</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          © 2014 Gaada Copyright
          </div>
        </div>
      </footer>`
    }
}
customElements.define('footer-section', footer);