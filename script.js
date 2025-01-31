// Player data
const players = [
  {
    name: "MS Dhoni",
    age: 42,
    image: "57.jpg",
    role: ' Wicket-keeper',
    specialty: 'Finishing, Leadership'
  },
  {
    name: "Ravindra Jadeja",
    age: 35,
    image: "46.jpg",
    role: 'All-rounder',
    specialty: 'Spin Bowling, Fielding'
  },
  {
    name: "Ruturaj Gaikwad",
    age: 27,
    image: "102.jpg",
    role: 'Batsman',
    specialty: 'Opening Batsman'
  },
  {
    name: "Matheesha Pathirana",
    age: 23,
    image: "1014.jpg",
    role: 'Bowler',
    specialty: 'Fast Bowling'
  }
];

// Gallery images
const galleryImages = [
  'https://img.jagranjosh.com/images/2023/May/3052023/ipl-2023-winner-chennai-super-kings-csk.webp',
  'https://library.sportingnews.com/styles/twitter_card_120x120/s3/2024-03/Chennai%20Super%20Kings%20IPL%202024%20032524%2016x9.jpg?itok=xKVDY5xl',
  'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/328700/328781.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XSUuDmbCeAj6TU0H7Xas8z7axYThU2MMBg&s'
];

// Jersey data
const jerseys = [
  {
    name: '2024 Official Match Jersey - Dhoni 7 - Adult (H/S)',
    image: 'https://www.chennaisuperkings.com/shop/_next/image?url=https%3A%2F%2Fstore.chennaisuperkings.com%2F%2Fmedia%2Fcatalog%2Fproduct%2F%2Fc%2Fs%2Fcsk_half_sleeve_1.png&w=1920&q=100',
    price: '₹1,999',
    size: 'S, M, L, XL',
    link: 'https://www.chennaisuperkings.com/shop/products/PRCSK24-MJHS-7D'
  },
  {
    name: 'CSK White Printed Shirt',
    image: 'https://www.chennaisuperkings.com/shop/_next/image?url=https%3A%2F%2Fstore.chennaisuperkings.com%2F%2Fmedia%2Fcatalog%2Fproduct%2F%2Fc%2Fr%2Fcrop-10.jpg&w=1920&q=100',
    price: '₹2,200',
    size: 'S, M, L, XL',
    link: 'https://www.chennaisuperkings.com/shop/products/CSK-WH-PS'
  },
  {
    name: 'Limited Edition - CSK Auction Shirt 2024',
    image: 'https://www.chennaisuperkings.com/shop/_next/image?url=https%3A%2F%2Fstore.chennaisuperkings.com%2F%2Fmedia%2Fcatalog%2Fproduct%2F%2Fc%2Fs%2Fcsk_2023_auctionwear_front.png&w=1920&q=100',
    price: '₹2,199',
    size: 'S, M, L, XL',
    link: 'https://www.chennaisuperkings.com/shop/products/Limited-Edition-CSK-Auction-Shirt-2024'
  }
];

// Performance data for charts
const teamCompositionData = {
  labels: ['Batsmen', 'Bowlers', 'All-rounders', 'Wicket-keepers'],
  datasets: [{
    data: [35, 30, 25, 10],
    backgroundColor: [
      'rgba(255, 206, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)',
      'rgba(153, 102, 255, 0.8)',
      'rgba(255, 159, 64, 0.8)'
    ],
    borderColor: [
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
  }]
};

const matchWinSourceData = {
  labels: ['Batting First', 'Chasing', 'Super Over'],
  datasets: [{
    data: [45, 52, 3],
    backgroundColor: [
      'rgba(242, 201, 76, 0.8)',
      'rgba(230, 126, 34, 0.8)',
      'rgba(52, 152, 219, 0.8)'
    ],
    borderColor: [
      'rgba(242, 201, 76, 1)',
      'rgba(230, 126, 34, 1)',
      'rgba(52, 152, 219, 1)'
    ],
    borderWidth: 1
  }]
};

const performanceByVenueData = {
  labels: ['Chepauk', 'Away Grounds', 'Neutral Venues'],
  datasets: [{
    data: [75, 60, 65],
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(75, 192, 192, 0.8)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(75, 192, 192, 1)'
    ],
    borderWidth: 1
  }]
};

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeIcon.classList.toggle('fa-moon');
  themeIcon.classList.toggle('fa-sun');
  updateChartTheme();
});

// Menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');

menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Scroll to top
const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollTop.classList.add('visible');
  } else {
    scrollTop.classList.remove('visible');
  }
});

scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Populate players
const playersGrid = document.querySelector('.players-grid');
players.forEach(player => {
  const playerCard = document.createElement('div');
  playerCard.className = 'player-card';
  playerCard.innerHTML = `
    <img src="${player.image}" alt="${player.name}" class="player-image">
    <div class="player-info">
      <h3 class="player-name">${player.name}</h3>
      <p class="player-details">Age: ${player.age}</p>
      <p class="player-details">Role: ${player.role}</p>
      <p class="player-details">Specialty: ${player.specialty}</p>
    </div>
  `;
  playersGrid.appendChild(playerCard);
});

// Populate gallery
const galleryGrid = document.querySelector('.gallery-grid');
galleryImages.forEach(image => {
  const img = document.createElement('img');
  img.src = image;
  img.alt = 'CSK Gallery Image';
  img.className = 'gallery-image';
  galleryGrid.appendChild(img);
});

// Populate jerseys
const jerseyGrid = document.querySelector('.jersey-grid');
jerseys.forEach(jersey => {
  const jerseyCard = document.createElement('div');
  jerseyCard.className = 'jersey-card';
  jerseyCard.innerHTML = `
    <img src="${jersey.image}" alt="${jersey.name}" class="jersey-image">
    <div class="jersey-info">
      <h3 class="jersey-name">${jersey.name}</h3>
      <p class="jersey-price">${jersey.price}</p>
      <p class="player-details">Available Sizes: ${jersey.size}</p>
      <a href="${jersey.link}" target="_blank" class="buy-button">Buy Now</a>
    </div>
  `;
  jerseyGrid.appendChild(jerseyCard);
});

// Create circular charts
const teamCompositionChart = new Chart(
  document.getElementById('teamCompositionChart'),
  {
    type: 'doughnut',
    data: teamCompositionData,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Team Composition',
          color: document.body.classList.contains('dark-theme') ? '#fff' : '#333'
        },
        legend: {
          position: 'bottom',
          labels: {
            color: document.body.classList.contains('dark-theme') ? '#fff' : '#333'
          }
        }
      }
    }
});

const matchWinSourceChart = new Chart(
  document.getElementById('matchWinSourceChart'),
  {
    type: 'pie',
    data: matchWinSourceData,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Match Wins Distribution',
          color: document.body.classList.contains('dark-theme') ? '#fff' : '#333'
        },
        legend: {
          position: 'bottom',
          labels: {
            color: document.body.classList.contains('dark-theme') ? '#fff' : '#333'
          }
        }
      }
    }
});

const performanceByVenueChart = new Chart(
  document.getElementById('performanceByVenueChart'),
  {
    type: 'doughnut',
    data: performanceByVenueData,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Win Percentage by Venue',
          color: document.body.classList.contains('dark-theme') ? '#fff' : '#333'
        },
        legend: {
          position: 'bottom',
          labels: {
            color: document.body.classList.contains('dark-theme') ? '#fff' : '#333'
          }
        }
      }
    }
});

// Update chart colors when theme changes
function updateChartTheme() {
  const textColor = document.body.classList.contains('dark-theme') ? '#fff' : '#333';
  
  [teamCompositionChart, matchWinSourceChart, performanceByVenueChart].forEach(chart => {
    chart.options.plugins.title.color = textColor;
    chart.options.plugins.legend.labels.color = textColor;
    chart.update();
  });
}

// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.remove('active');
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});