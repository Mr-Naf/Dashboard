const Sales = document.getElementById('salesChart', '2d');
const salesChart = new Chart(Sales, {
    type: 'line',
    data: {
        labels: ['2025-07-29', '2025-07-30', '2025-07-31', '2025-08-01', '2025-08-04', '2025-08-06', '2025-08-06', '2025-08-06', '2025-08-07'],
        datasets: [{
            label: 'Sales',
            data: [22500, 18000, 37000, 6000, 21000, 4000, 2000, 2000, 4000],
            borderColor: 'blue',
            fill: false,
            borderWidth: 3,
            lineTension: 0.4,
            pointRadius: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,

            }

        }
    }
});

const toggleBtn = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');
const gridLayout = document.querySelector('.grid-layout');
const navbar = document.getElementById('navbar');
let isSticky = true;
toggleBtn.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('show');
        navbar.classList.remove('sticky-top');
    } else {
        navbar.classList.add('sticky-top');
        sidebar.classList.toggle('hidden');
        gridLayout.classList.toggle('sidebar-hidden');
    }
});


window.addEventListener('resize', () => {
    if (window.outerHeight >= 768) {
        sidebar.classList.remove('show');
        navbar.classList.add('sticky-top');
    } else {

        sidebar.classList.remove('hidden');
        gridLayout.classList.remove('sidebar-hidden');
        navbar.classList.remove('sticky-top')
    }
});



document.addEventListener('click', (event) => {
    if (window.innerWidth <= 768) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = toggleBtn.contains(event.target);
        if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('show')) {
            sidebar.classList.remove('show');
            navbar.classList.remove('sticky-top');
        }
    } else {
        navbar.classList.add('sticky-top');
    }
});


document.querySelectorAll('.toggle-dropdown').forEach(icon => {
    icon.addEventListener('click', function (e) {
        e.preventDefault();

        let submenu = this.parentElement.nextElementSibling;
        document.querySelectorAll('.dropdown-submenu').forEach(menu => {
            if (menu !== submenu) {
                menu.classList.remove('show');
            }
        });
        submenu.classList.toggle('show');
    });
});

