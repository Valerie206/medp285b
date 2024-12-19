
// Create floating stars dynamically
function createStar() {
  const star = document.createElement('div');
  star.style.position = 'absolute';
  star.style.width = '2px';
  star.style.height = '2px';
  star.style.background = 'white';
  star.style.borderRadius = '50%';
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite`;
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 5000);
}

setInterval(createStar, 300);

function saveDream() {
  const dreamText = document.querySelector("textarea").value.trim();

  if (dreamText) {
    // Save dream to localStorage (using a unique key for multiple dreams)
    const savedDreams = JSON.parse(localStorage.getItem("dreams")) || [];
    savedDreams.push(dreamText);
    localStorage.setItem("dreams", JSON.stringify(savedDreams));

    // Append dream to the log
    const dreamLog = document.querySelector(".dream-log");
    if (dreamLog) {
      dreamLog.insertAdjacentHTML("beforeend", `<p>${dreamText}</p>`);
    }

    // Clear the textarea after saving
    document.querySelector("textarea").value = "";
  } else {
    alert("Please write something about your dream before saving!");
  }
}

function loadDreams() {
  const savedDreams = JSON.parse(localStorage.getItem("dreams")) || [];
  const dreamLog = document.querySelector(".dream-log");

  if (dreamLog) {
    savedDreams.forEach((dream) => {
      dreamLog.insertAdjacentHTML("beforeend", `<p>${dream}</p>`);
    });
  }
}

// Call the function when the page loads
window.onload = loadDreams;

// Filter table by search input
        function filterTable() {
            const input = document.getElementById('searchBar').value.toLowerCase();
            const rows = document.querySelectorAll('table tbody tr');
            rows.forEach(row => {
                const symbol = row.cells[0].textContent.toLowerCase();
                row.style.display = symbol.includes(input) ? '' : 'none';
            });
        }

$(document).ready(function () {
    function createCloud() {
        const cloudSize = Math.random() * 100 + 50; // Random size between 50px and 150px
        const startPosition = Math.random() * $(window).width();
        const animationDuration = Math.random() * 20 + 10; // Random speed between 10s and 30s

        const $cloud = $('<div class="cloud"></div>').css({
            width: `${cloudSize}px`,
            height: `${cloudSize * 0.6}px`, // Clouds are slightly oval
            top: `${Math.random() * 50}vh`,
            left: `${-cloudSize}px`, // Start off-screen to the left
        });

        $('body').append($cloud);

        $cloud.animate(
            { left: `${$(window).width() + cloudSize}px` },
            animationDuration * 1000,
            'linear',
            function () {
                $cloud.remove();
            }
        );
    }

    setInterval(createCloud, 3000); // Create a new cloud every 3 seconds
});



