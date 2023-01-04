class GenshinRole extends HTMLElement {
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `<div class="col l8 m7">
        <div class="card">  
           <div id="GI-Role-1" class="card-image">
             <span class="card-title">Role</span>
           </div>
           <div class="card-content">
             <p>Genshin Impact takes place in the fantasy world of Teyvat, which is home to seven nations, 
               each of which is tied to a different element and ruled by a different god. The story follows the Traveler
               , who has traveled across countless worlds with their twin sibling before becoming separated in Teyvat.</p>
           </div>
         </div>
       </div>
       <div class="col l4 m7">
         <div class="card">
           <div id="GI-Role-2" class="card-image">

             <span class="card-title black-text"> <b> Characters </b> </span>
           </div>
           <div class="card-action">
             <a href="#character">See More</a>
           </div>
         </div>
       </div> `;
    }
}
customElements.define('role-render', GenshinRole);
