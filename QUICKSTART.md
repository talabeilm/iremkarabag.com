# 🚀 Quick Start Guide

## Get Your Site Live in 10 Minutes

### Step 1: Customize Configuration (2 minutes)
Open `_config.yml` and update:
- `title`: Your Name
- `email`: Your Email
- `description`: Your bio/tagline
- All social media handles (Twitter, GitHub, LinkedIn, etc.)
- `google_scholar`: Your Google Scholar ID
- `orcid`: Your ORCID identifier

### Step 2: Add Essential Files (3 minutes)
1. Add your profile photo: `assets/images/profile.jpg` (200x200px recommended)
2. Add your CV: `cv.pdf` in the root directory
3. Update the "About" section in `index.html` with your bio

### Step 3: Deploy to GitHub Pages (5 minutes)

**Option A: New Repository (Recommended)**
```bash
# Navigate to the project
cd academic-portfolio

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub named: yourusername.github.io
# Then push:
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

**Option B: Existing Repository**
```bash
git remote add origin https://github.com/yourusername/repository-name.git
git branch -M main
git push -u origin main

# Then update _config.yml:
baseurl: "/repository-name"
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click Settings → Pages
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. Wait 2-3 minutes

### Step 5: Visit Your Site! 🎉
- **Option A**: `https://yourusername.github.io`
- **Option B**: `https://yourusername.github.io/repository-name`

---

## Next Steps

### Add Your First Publication
Create `_publications/2024-my-paper.md`:
```markdown
---
layout: publication
title: "Your Paper Title"
authors: "You, Coauthor"
venue: "Conference/Journal Name"
date: 2024-01-15
doi: "10.1234/example"
pdf: "/assets/pdfs/paper.pdf"
abstract: "Your abstract here"
---
```

### Add Your First Project
Create `_projects/my-project.md`:
```markdown
---
layout: project
title: "Project Name"
description: "Short description"
status: "Active"
featured: true
---

Detailed project description here...
```

### Write Your First Blog Post
Create `_posts/2025-02-12-hello-world.md`:
```markdown
---
layout: post
title: "Hello World"
date: 2025-02-12
---

Your first blog post content...
```

### Update Your Site
After making changes:
```bash
git add .
git commit -m "Updated content"
git push
```
Site updates automatically in 1-2 minutes!

---

## Troubleshooting

**Site not showing?**
- Wait 2-3 minutes after first push
- Check Settings → Pages is enabled
- Verify repository name matches `_config.yml` baseurl

**Images not loading?**
- Check paths start with `/assets/images/`
- Ensure images are committed: `git add assets/images/*`

**Need help?**
- Check `README.md` for detailed docs
- Check `DEPLOYMENT.md` for deployment options
- Search GitHub Issues

---

## Tips for Success

✅ **DO:**
- Keep profile photo under 500KB
- Use descriptive commit messages
- Test locally before pushing (optional)
- Update content regularly

❌ **DON'T:**
- Commit large files (>10MB)
- Include sensitive information
- Use absolute URLs (use `{{ site.url }}` instead)

---

Happy publishing! Your academic portfolio is ready to showcase your work to the world. 📚✨
