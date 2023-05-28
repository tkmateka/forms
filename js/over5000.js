const cardsContainer = document.getElementById('cardsContainer');

const cardsData = [
    {
        img: './images/profile-image.webp',
        alt: 'profile-image',
        name: 'Tukiso Mateka',
        company: 'XYZ .inc',
        mainContent: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus aperiam!"'
    },
    {
        img: './images/profile-image.webp',
        alt: 'profile-image',
        name: 'Tukiso Mateka',
        company: 'XYZ .inc',
        mainContent: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus aperiam!"'
    },
    {
        img: './images/profile-image.webp',
        alt: 'profile-image',
        name: 'Tukiso Mateka',
        company: 'XYZ .inc',
        mainContent: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus aperiam!"'
    },
    {
        img: './images/profile-image.webp',
        alt: 'profile-image',
        name: 'Tukiso Mateka',
        company: 'XYZ .inc',
        mainContent: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus aperiam!"'
    },
    {
        img: './images/profile-image.webp',
        alt: 'profile-image',
        name: 'Tukiso Mateka',
        company: 'XYZ .inc',
        mainContent: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus aperiam!"'
    },
    {
        img: './images/profile-image.webp',
        alt: 'profile-image',
        name: 'Tukiso Mateka',
        company: 'XYZ .inc',
        mainContent: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus aperiam!"'
    }
];

cardsData.forEach(card => {
    cardsContainer.innerHTML += `
        <div class="card">
            <div class="profile">
                <div class="profile-image">
                    <img src="${card.img}" alt="${card.alt}">
                </div>
                <div class="profile-title">
                    <p><b>${card.name}</b></p>
                    <p>${card.company}</p>
                </div>
            </div>
            <div class="content">
                <p><small>${card.mainContent}</small></p>
            </div>
        </div>
    `
});