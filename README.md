# Academic Portfolio Website

A professional Jekyll-based portfolio website for academic writers, researchers, and scholars. Designed for easy deployment to GitHub Pages.

## Features

- 📚 **Publications Management**: Organize and showcase your research papers by year
- 🔬 **Project Showcase**: Highlight current and past research projects
- ✍️ **Blog Platform**: Share insights and reflections on your field
- 👨‍🏫 **Teaching Section**: Display courses and teaching philosophy
- 📱 **Responsive Design**: Works beautifully on desktop, tablet, and mobile
- 🎨 **Clean, Professional Aesthetic**: Academic-focused design
- 🔍 **SEO Optimized**: Built-in SEO tags and sitemap generation
- 🚀 **GitHub Pages Ready**: Deploy for free in minutes

## Quick Start

### Prerequisites

- Git installed on your computer
- A GitHub account
- Basic familiarity with Markdown (optional but helpful)

### Setup Instructions

1. **Fork or Clone this Repository**
   ```bash
   git clone https://github.com/yourusername/academic-portfolio.git
   cd academic-portfolio
   ```

2. **Customize Site Configuration**
   
   Edit `_config.yml` with your information:
   ```yaml
   title: Your Name
   email: your.email@university.edu
   description: Your professional description
   # ... update all social media handles and identifiers
   ```

3. **Add Your Content**

   - **Profile Photo**: Add your photo to `assets/images/profile.jpg`
   - **CV**: Add your CV PDF to `cv.pdf` in the root directory
   - **Publications**: Add markdown files to `_publications/`
   - **Projects**: Add markdown files to `_projects/`
   - **Blog Posts**: Add markdown files to `_posts/`

4. **Test Locally** (Optional)
   ```bash
   # Install dependencies
   bundle install
   
   # Run local server
   bundle exec jekyll serve
   
   # Visit http://localhost:4000
   ```

5. **Deploy to GitHub Pages**

   a. Create a new repository on GitHub named `yourusername.github.io`
   
   b. Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git branch -M main
   git push -u origin main
   ```
   
   c. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

   Your site will be live at `https://yourusername.github.io` in a few minutes!

## Customization Guide

### Adding Publications

Create a new file in `_publications/` with this format:

```markdown
---
layout: publication
title: "Your Paper Title"
authors: "Author 1, Author 2, Author 3"
venue: "Journal or Conference Name"
volume: "15(3)"
pages: "123-145"
date: 2024-06-15
doi: "10.1234/example.2024.123"
pdf: "/assets/pdfs/your-paper.pdf"
arxiv: "2406.12345"
code: "https://github.com/yourusername/project"
abstract: "Your paper abstract here..."
---

Additional details about the publication...
```

### Adding Projects

Create a new file in `_projects/`:

```markdown
---
layout: project
title: "Project Name"
description: "Brief description"
status: "Active" # or "Completed"
duration: "2023 - Present"
funding: "Funding Source (optional)"
image: "/assets/images/project-image.jpg"
featured: true # Shows on homepage
collaborators:
  - "Collaborator 1"
  - "Collaborator 2"
links:
  - name: "Project Website"
    url: "https://example.com"
---

Detailed project description...
```

### Adding Blog Posts

Create a new file in `_posts/` with format `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-01-15
categories: [category1, category2]
tags: [tag1, tag2, tag3]
---

Your blog post content in Markdown...
```

### Customizing Colors

Edit CSS variables in `assets/css/main.css`:

```css
:root {
  --primary-color: #2c3e50;    /* Main headers, navigation */
  --secondary-color: #3498db;  /* Links, accents */
  --accent-color: #e74c3c;     /* Hover states */
  /* ... */
}
```

### Customizing Navigation

Edit `_includes/header.html` to add/remove menu items.

### Contact Form Setup

To enable the contact form:

1. Sign up for free at [Formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Edit `contact.html` and replace `YOUR_FORM_ID` with your actual ID

## File Structure

```
academic-portfolio/
├── _config.yml           # Site configuration
├── _layouts/             # Page templates
│   ├── default.html
│   ├── publication.html
│   ├── project.html
│   └── post.html
├── _includes/            # Reusable components
│   ├── header.html
│   └── footer.html
├── _publications/        # Your publications (markdown)
├── _projects/           # Your projects (markdown)
├── _posts/              # Blog posts (markdown)
├── assets/
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript
│   └── images/         # Images
├── index.html          # Homepage
├── publications.html   # Publications page
├── projects.html       # Projects page
├── blog.html          # Blog page
├── teaching.html      # Teaching page
├── contact.html       # Contact page
├── Gemfile            # Ruby dependencies
└── README.md          # This file
```

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

GitHub Pages will automatically rebuild your site (usually takes 1-2 minutes).

## Support

### Common Issues

**Site not updating after push?**
- Check Settings → Pages to ensure it's enabled
- Wait 2-3 minutes for rebuild
- Clear browser cache

**Images not showing?**
- Check file paths start with `/assets/images/`
- Ensure images are committed to repository

**Styling looks broken?**
- Check that `assets/css/main.css` is committed
- Clear browser cache

### Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [Formspree Documentation](https://help.formspree.io/)

## License

This template is open source and available under the MIT License. Feel free to use it for your own academic portfolio!

## Credits

Built with:
- [Jekyll](https://jekyllrb.com/) - Static site generator
- [GitHub Pages](https://pages.github.com/) - Free hosting
- [Formspree](https://formspree.io/) - Contact form handling

---

**Questions?** Open an issue on GitHub or reach out via the contact form on your deployed site.

Happy publishing! 📚✨
