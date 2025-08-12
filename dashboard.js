$(document).ready(function () {
    // Chart
    const Sales = document.getElementById('salesChart', '2d');
    const salesChart = new Chart(Sales, {
        type: 'line',
        data: {
            labels: ['2025-07-29', '2025-07-30', '2025-07-31', '2025-08-01', '2025-08-04', '2025-08-06', '2025-08-06', '2025-08-06', '2025-08-07'],
            datasets: [{
                label: 'Sales',
                data: [22500, 18000, 37000, 6000, 21000, 4000, 2000, 2000, 4000],
                borderColor: 'rgba(23, 122, 255, 0.8)',
                fill: false,
                borderWidth: 3,
                lineTension: 0.4,
                pointRadius: 0.1
            }]
        },
        options: {
            scales: { y: { beginAtZero: true } },
            plugins: {
                legend: { display: false }
            }
        }
    });

    $(".toggle-dropdown").each(function () {
        $(this).closest('.nav-item').addClass('toggle-parent');
    });

    // SidebarToggle
    $("#toggle").click(function () {
        if ($(window).width() <= 768) {
            $("#sidebar").toggleClass("show");
        } else {
            $("#sidebar").toggleClass("hidden");
        }
        $("#navbar").addClass("sticky-top");
    });

    // WindowResize
    $(window).resize(function () {
        if ($(window).outerHeight() >= 768) {
            $("#sidebar").removeClass("show");
        } else {
            $("#sidebar").removeClass("hidden");
        }
        $("#navbar").addClass("sticky-top");
    });

    //sidebar to close-mobile
    $(document).click(function (event) {
        if ($(window).width() <= 768) {
            let insideSidebar = $(event.target).closest("#sidebar").length;
            let onToggle = $(event.target).closest("#toggle").length;
            if (!insideSidebar && !onToggle && $("#sidebar").hasClass("show")) {
                $("#sidebar").removeClass("show");
            }
        }
        $("#navbar").addClass("sticky-top");
    });

    // Dropdown Menu Toggle
    $(".nav-item.toggle-parent").click(function (e) {
        if ($(e.target).is('a')) e.preventDefault();
        let subMenu = $(this).next(".dropdown-submenu");
        let icon = $(this).find(".icon");
        if (subMenu.hasClass("show")) {
            subMenu.removeClass("show");
            icon.removeClass("rotated");
        } else {
            $(".dropdown-submenu").removeClass("show");
            $(".icon").removeClass("rotated");
            subMenu.addClass("show");
            icon.addClass("rotated");
        }
    });
    // Custom hover click effect
    $(".custom-hover").click(function () {
        $(".custom-hover").removeClass("clicked");
        $(this).addClass("clicked");
    });

    // Dark/Light Mode Toggle
    $(".dark-mode").hide();
    $(".light-mode").show();
    $("#light-dark-mode").on("click", function () {
        if ($(".light-mode").is(":visible")) {
            $(".light-mode").hide();
            $(".dark-mode").show();
            $("body").addClass("darkModeActive");
        } else {
            $(".dark-mode").hide();
            $(".light-mode").show();
            $("body").removeClass("darkModeActive");
        }
    });

});