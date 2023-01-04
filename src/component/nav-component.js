class Nav extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `<nav class="indigo lighten-2">
        <div class="container">
          <a href="Logo" class="brand-logo">Shrchse.Lin</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="">Home</a></li>
            <li><a href="#region">Region</a></li>
            <li><a href="#character">Characters</a></li>
          </ul>
        </div>
      </nav>`
    }
}
customElements.define('nav-bar', Nav);