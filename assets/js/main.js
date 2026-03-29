// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.site-nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.site-header')) {
      nav.classList.remove('active');
      if (menuToggle) {
        menuToggle.classList.remove('active');
      }
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Substack RSS feed
  var substackUrl = 'iremkarabag.substack.com';
  var feedContainers = document.querySelectorAll('.substack-feed');

  if (feedContainers.length > 0) {
    var apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://' + substackUrl + '/feed';

    fetch(apiUrl)
      .then(function(response) { return response.json(); })
      .then(function(data) {
        if (data.status !== 'ok') {
          throw new Error('Feed unavailable');
        }
        feedContainers.forEach(function(container) {
          var limit = parseInt(container.getAttribute('data-limit')) || 10;
          var items = data.items.slice(0, limit);
          container.innerHTML = '';

          items.forEach(function(item) {
            var date = new Date(item.pubDate);
            var dateStr = date.toLocaleDateString('en-US', {
              year: 'numeric', month: 'long', day: 'numeric'
            });

            // Strip HTML tags and truncate for excerpt
            var tmp = document.createElement('div');
            tmp.innerHTML = item.description || '';
            var excerpt = tmp.textContent.substring(0, 200);
            if (tmp.textContent.length > 200) excerpt += '...';

            var card = document.createElement('div');
            card.className = 'substack-item';
            card.innerHTML =
              '<h3><a href="' + item.link + '" target="_blank" rel="noopener">' + item.title + '</a></h3>' +
              '<p class="substack-item-date">' + dateStr + '</p>' +
              '<p class="substack-item-excerpt">' + excerpt + '</p>' +
              '<a href="' + item.link + '" target="_blank" rel="noopener" class="read-more">Read on Substack →</a>';
            container.appendChild(card);
          });
        });
      })
      .catch(function() {
        feedContainers.forEach(function(container) {
          container.innerHTML =
            '<p class="substack-error">Could not load newsletter posts. ' +
            '<a href="https://' + substackUrl + '" target="_blank" rel="noopener">Visit my newsletter on Substack →</a></p>';
        });
      });
  }
});
