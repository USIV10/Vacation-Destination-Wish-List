(function(){

    'use strict';

    const detailsForm = document.querySelector("#destination_details_form");
    detailsForm.addEventListener("submit", handleFormSubmit);
    
    function handleFormSubmit(event){
        event.preventDefault();
    
        const desName = event.target.elements["name"].value;
        const desLocation = event.target.elements["location"].value;
        const desPhoto = event.target.elements["photo"].value;
        const desDesc = event.target.elements["description"].value;
    
        for(let i = 0; i < detailsForm.length; i++){
            detailsForm.elements[i].value = ""; 
        } 
    
        const destCard = createDestinationCard(desName, desLocation, desPhoto, desDesc);
    
        const wishListContainer = document.getElementById('destinations_container');
    
        if (wishListContainer.children.length === 0) {
            document.getElementById('title').innerHtmtl = "My Wish List";
          }
            document.querySelector('#destinations_container').appendChild(destCard);
        }
    
    function createDestinationCard(name, location, photoURL, description){
        const card = document.createElement('div');
        card.className = 'card';
    
        const img = document.createElement('img');
        img.setAttribute('alt', name);
    
        const constantPhotoUrl = "images/signpost.jpg";
    
        if(photoURL.length === 0){
            img.setAttribute('src', constantPhotoUrl);
        }
        else{
            img.setAttribute('src', photoURL);
        }
    
         card.appendChild(img);
    
         const cardBody = document.createElement("div");
       cardBody.className = "card-body";
    
       const cardTitle = document.createElement("h3");
       cardTitle.innerText = name;
       cardBody.appendChild(cardTitle); 
    
    
    
       const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);
    
    if (description.length !== 0){
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    
        const cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.innerText = "Remove";
        cardDeleteBtn.className = "btn btn-info";
    
        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn);
     
        card.appendChild(cardBody);
    
         return card;
    }
    
    function removeDestination(event){
        const card = event.target.parentElement.parentElement;
        card.remove();
    }
     }
})();

