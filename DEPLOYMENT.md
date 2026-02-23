# Deployment Guide for Academic Portfolio

## Quick Deploy to GitHub Pages (Recommended)

### Option 1: Deploy to username.github.io

1. **Create Repository**
   - Go to GitHub and create a new repository
   - Name it: `yourusername.github.io` (replace with your actual GitHub username)
   - Make it public
   - Do NOT initialize with README

2. **Push Your Code**
   ```bash
   cd academic-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Build and deployment":
     - Source: GitHub Actions (recommended)
   - The GitHub Actions workflow is already configured!

4. **Visit Your Site**
   - Your site will be live at: `https://yourusername.github.io`
   - First build takes 2-3 minutes

### Option 2: Deploy to a Project Repository

If you want your site at `yourusername.github.io/portfolio`:

1. **Create Repository**
   - Name it anything (e.g., "portfolio" or "academic-site")
   - Make it public

2. **Update _config.yml**
   ```yaml
   baseurl: "/portfolio"  # Add this line with your repo name
   url: "https://yourusername.github.io"  # Your GitHub username
   ```

3. **Push Code** (same as Option 1, but with your repo name)

4. **Enable GitHub Pages** (same as Option 1)

5. **Visit**: `https://yourusername.github.io/portfolio`

## Alternative Deployment Options

### Deploy to Netlify

1. **Push to GitHub** (any repository name)

2. **Go to Netlify**
   - Sign up at [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository

3. **Build Settings**
   - Build command: `jekyll build`
   - Publish directory: `_site`
   - Click "Deploy site"

4. **Custom Domain** (optional)
   - Go to Domain settings
   - Add your custom domain
   - Follow DNS instructions

### Deploy to Vercel

1. **Push to GitHub**

2. **Go to Vercel**
   - Sign up at [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Framework Preset**
   - Select "Other"
   - Build command: `jekyll build`
   - Output directory: `_site`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes

### Self-Hosting

1. **Build the Site Locally**
   ```bash
   bundle install
   JEKYLL_ENV=production bundle exec jekyll build
   ```

2. **Upload the _site folder**
   - Use FTP, SFTP, or rsync to upload `_site/` to your web server
   - Point your domain to this directory

3. **Server Configuration**
   - Ensure your server can serve static HTML files
   - Set up HTTPS (recommended: Let's Encrypt)

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Images display properly
- [ ] Links work (internal and external)
- [ ] Responsive design works on mobile
- [ ] Contact form is configured (if using)
- [ ] Google Scholar, ORCID links are correct
- [ ] CV PDF is uploaded

## Updating Your Site

After deployment, to update your site:

```bash
# Make your changes to files
git add .
git commit -m "Description of changes"
git push origin main
```

- **GitHub Pages**: Auto-rebuilds in 1-2 minutes
- **Netlify/Vercel**: Auto-rebuilds on push
- **Self-hosted**: Re-run `jekyll build` and re-upload

## Custom Domain Setup (GitHub Pages)

1. **Buy a Domain** (e.g., from Namecheap, Google Domains)

2. **Add CNAME File**
   ```bash
   echo "yourdomain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

3. **Configure DNS**
   
   Add these DNS records at your domain registrar:
   
   For apex domain (yourdomain.com):
   ```
   A     185.199.108.153
   A     185.199.109.153
   A     185.199.110.153
   A     185.199.111.153
   ```
   
   For www subdomain:
   ```
   CNAME www yourusername.github.io
   ```

4. **Enable HTTPS**
   - In GitHub Settings → Pages
   - Check "Enforce HTTPS"

## Troubleshooting

### Build Failures

**Problem**: GitHub Actions build fails

**Solution**:
- Check the Actions tab for error messages
- Ensure Gemfile is committed
- Verify all required files are present

### 404 Errors

**Problem**: Pages show 404

**Solution**:
- Check that files are in the correct location
- Verify `baseurl` in `_config.yml`
- Ensure permalink settings are correct

### Images Not Loading

**Problem**: Images don't display

**Solution**:
- Check file paths use `/assets/images/filename.jpg`
- Ensure images are committed to repository
- Verify image file names match exactly (case-sensitive)

### Styling Issues

**Problem**: Site looks unstyled

**Solution**:
- Verify `assets/css/main.css` is committed
- Clear browser cache
- Check for CSS errors in browser console

## Performance Tips

1. **Optimize Images**
   - Resize images before uploading
   - Use appropriate formats (JPG for photos, PNG for graphics)
   - Keep images under 500KB when possible

2. **Enable Caching**
   - GitHub Pages handles this automatically
   - For self-hosting, configure server caching headers

3. **Minimize Dependencies**
   - Only include plugins you actually use
   - Remove unused CSS/JS files

## Security

1. **Keep Dependencies Updated**
   ```bash
   bundle update
   ```

2. **Enable HTTPS**
   - Always use HTTPS for your site
   - GitHub Pages provides this for free

3. **Protect Sensitive Info**
   - Never commit API keys or passwords
   - Use environment variables for secrets
   - Add sensitive files to `.gitignore`

## Need Help?

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Visit [Jekyll documentation](https://jekyllrb.com/docs/)
- Open an issue on the repository
- Search [Stack Overflow](https://stackoverflow.com/questions/tagged/jekyll)

---

Good luck with your deployment! 🚀
