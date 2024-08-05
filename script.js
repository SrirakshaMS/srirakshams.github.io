function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}



document.addEventListener("DOMContentLoaded", function() {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    circles.forEach(function(circle) {
        circle.x = 0;
        circle.y = 0;
    });

    window.addEventListener("mousemove", function(e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {
        let x = coords.x;
        let y = coords.y;

        circles.forEach(function(circle, index) {
            circle.style.left = `${x - 12}px`;
            circle.style.top = `${y - 12}px`;

            circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
    }

    animateCircles();
});

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
  
    function handleScroll() {
      const windowHeight = window.innerHeight;
      
      timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom >= 0) {
          item.classList.add('in-view');
        }
      });
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const timeline = document.querySelector('.timeline');
    
    // Define the intersection observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add class to start animation when timeline is in view
          timeline.classList.add('line-animate');
        } else {
          // Optionally, remove class if you want to reset animation when out of view
          // timeline.classList.remove('line-animate');
        }
      });
    }, {
      threshold: 0.1 // Adjust this value if needed
    });
  
    // Observe the timeline
    if (timeline) {
      observer.observe(timeline);
    }
  });
  