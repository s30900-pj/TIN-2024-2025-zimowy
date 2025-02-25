document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const nawigacjaMenu = document.getElementById('nawigacja_menu');

    hamburger.addEventListener('click', () => {
    nawigacjaMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
  });

    const modal = document.getElementById('modalForm');
    const openModalBtn = document.querySelector('.nawigacja__przycisk');
    const closeButton = document.querySelector('.close-button');
    const addListingForm = document.getElementById('addListingForm');
    const listingsWrapper = document.querySelector('.ogloszenia_wrapper');
  
    openModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'block';
    });
  
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  
    addListingForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const imgSrc = addListingForm.imgSrc.value;
      const price = addListingForm.price.value;
      const title = addListingForm.title.value;
      const location = addListingForm.location.value;
      const rooms = addListingForm.rooms.value;
      const bathrooms = addListingForm.bathrooms.value;
      const garage = addListingForm.garage.value;
  
      const card = document.createElement('div');
      card.className = 'ogloszenie_karta';
  
      card.innerHTML = `
        <div class="ogloszenie_obrazek">
          <img src="${imgSrc}" alt="${title}">
        </div>
        <div class="ogloszenie_info">
          <p class="ogloszenie_cena">${price}</p>
          <h3 class="ogloszenie_tytul">${title}</h3>
          <p class="ogloszenie_lokalizacja">${location}</p>
          <ul class="ogloszenie_detale">
            <li>${rooms} pokoje</li>
            <li>${bathrooms} łazienki</li>
            <li>${garage} garaż</li>
          </ul>
          <a href="#" class="przycisk">Pokaż szczegóły</a>
        </div>
      `;
  
      listingsWrapper.appendChild(card);
  
      addListingForm.reset();
      modal.style.display = 'none';
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.strona-domowa__wyszukiwanie');
    const input = document.querySelector('.strona-domowa_wyszukiwanie-wejscie');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const opinia = input.value.trim();
      if(opinia) {
        const istniejąceOpinie = JSON.parse(localStorage.getItem('opinie')) || [];
        istniejąceOpinie.push(`${new Date().toISOString()} - ${opinia}`);
        localStorage.setItem('opinie', JSON.stringify(istniejąceOpinie));
        input.value = '';
  
        const tekstDoPobrania = istniejąceOpinie.join('\n');
        const blob = new Blob([tekstDoPobrania], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
  
        const a = document.createElement('a');
        a.href = url;
        a.download = 'opinie.txt';
        document.body.appendChild(a);
        a.click();
  
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
  
        alert('Twoja opinia została zapisana i plik został pobrany.');
      }
    });
  });
  
  
  