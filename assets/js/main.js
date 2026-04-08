// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navs = document.querySelectorAll('.site-nav-primary, .site-nav-secondary');

  if (menuToggle) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navs.forEach(function(n) { n.classList.toggle('active'); });
      this.classList.toggle('active');
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.site-header')) {
      navs.forEach(function(n) { n.classList.remove('active'); });
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

  // Scroll-reveal with IntersectionObserver
  var revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show home immediately
    revealElements.forEach(function(el) {
      el.classList.add('revealed');
    });
  }

  // Substack RSS feed (renders as .feed-item entries in a .feed-list)
  var substackUrl = 'iremkarabag.substack.com';
  var feedContainers = document.querySelectorAll('.substack-feed');

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

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
          var isList = container.tagName === 'UL' || container.tagName === 'OL';
          var isBoxGrid = container.classList.contains('explore-blocks');
          container.innerHTML = '';

          items.forEach(function(item) {
            var date = new Date(item.pubDate);
            var dateStr = date.toLocaleDateString('en-US', {
              year: 'numeric', month: 'short', day: 'numeric'
            });

            var title = escapeHtml(item.title);
            var href = item.link;

            if (isBoxGrid) {
              var a = document.createElement('a');
              a.href = href;
              a.target = '_blank';
              a.rel = 'noopener';
              a.className = 'box big newsletter';
              a.innerHTML =
                '<span class="type">Newsletter</span>' +
                '<div class="title">' + title + '</div>' +
                '<div class="meta">' + dateStr + '</div>';
              container.appendChild(a);
            } else if (isList) {
              var li = document.createElement('li');
              li.className = 'feed-item';
              li.innerHTML =
                '<a href="' + href + '" target="_blank" rel="noopener">' +
                  '<span class="feed-item-title">' + title + '</span>' +
                  '<span class="feed-item-meta">' + dateStr + '</span>' +
                '</a>';
              container.appendChild(li);
            } else {
              var article = document.createElement('article');
              article.className = 'feed-item';
              article.innerHTML =
                '<a href="' + href + '" target="_blank" rel="noopener">' +
                  '<span class="feed-item-title">' + title + '</span>' +
                  '<span class="feed-item-meta">' + dateStr + '</span>' +
                '</a>';
              container.appendChild(article);
            }
          });
        });
      })
      .catch(function() {
        feedContainers.forEach(function(container) {
          var isList = container.tagName === 'UL' || container.tagName === 'OL';
          var isBoxGrid = container.classList.contains('explore-blocks');
          var msg =
            'Could not load newsletter posts. ' +
            '<a href="https://' + substackUrl + '" target="_blank" rel="noopener">Visit on Substack &rarr;</a>';
          if (isBoxGrid) {
            container.innerHTML = '<div class="feed-item-error">' + msg + '</div>';
          } else if (isList) {
            container.innerHTML = '<li class="feed-item feed-item-error">' + msg + '</li>';
          } else {
            container.innerHTML = '<p class="feed-item-error">' + msg + '</p>';
          }
        });
      });
  }
});
