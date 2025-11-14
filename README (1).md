# SK Saif Ibna Ezhar Arko - Portfolio CV

একটি modern, animated এবং responsive portfolio CV website।

## 📁 Files

- `index.html` - Main HTML file
- `style.css` - CSS stylesheet with animations
- `script.js` - JavaScript for interactivity

## 🚀 GitHub Pages এ Deploy করার নিয়ম

### Step 1: Repository তৈরি করুন
1. GitHub এ যান এবং একটি **নতুন repository** তৈরি করুন
2. Repository এর নাম দিন: `saifibnaezhararko.github.io` 
   (অথবা `your-username.github.io` format এ)
3. Repository কে **Public** রাখুন
4. **Initialize this repository with a README** চেক করবেন না

### Step 2: Files Upload করুন
1. আপনার নতুন repository তে যান
2. "uploading an existing file" link এ ক্লিক করুন
3. তিনটি file একসাথে drag & drop করুন:
   - index.html
   - style.css
   - script.js
4. Commit message লিখুন: "Initial commit - Portfolio CV"
5. **Commit changes** বাটনে ক্লিক করুন

### Step 3: GitHub Pages Enable করুন
1. Repository Settings এ যান
2. বাম দিকের menu থেকে **Pages** সিলেক্ট করুন
3. Source এ **Deploy from a branch** সিলেক্ট করুন
4. Branch এ **main** (অথবা **master**) সিলেক্ট করুন
5. **Save** বাটনে ক্লিক করুন

### Step 4: Live দেখুন
কয়েক মিনিট পর আপনার website live হবে:
- URL: `https://saifibnaezhararko.github.io`

## 🎨 Features

### ✨ Animations & Effects
- Smooth scrolling navigation
- Typing animation in hero section
- Counter animation for statistics
- Skill progress bar animations
- Parallax effects
- Card hover effects with 3D tilt
- Animated background with floating circles
- Fade-in animations on scroll

### 📱 Responsive Design
- Mobile-friendly navigation
- Responsive grid layouts
- Optimized for all screen sizes
- Touch-friendly buttons

### 🎯 Sections
1. **Hero Section** - Introduction with animated typing
2. **About** - Education and achievements with animated stats
3. **Experience** - Timeline view of work experience
4. **Projects** - Featured projects with hover effects
5. **Skills** - Categorized skills with progress bars
6. **Contact** - Contact information and references

## 🛠️ Customization

### Colors পরিবর্তন করতে
`style.css` file এ `:root` section edit করুন:

```css
:root {
    --primary-color: #6366f1;    /* Main color */
    --secondary-color: #8b5cf6;   /* Secondary color */
    --accent-color: #ec4899;      /* Accent color */
}
```

### Text Content পরিবর্তন করতে
`index.html` file এ আপনার information update করুন।

### Typing Animation Text পরিবর্তন করতে
`script.js` file এ `titles` array edit করুন:

```javascript
const titles = [
    'Your Title 1',
    'Your Title 2',
    'Your Title 3'
];
```

## 📸 Profile Picture যোগ করতে

1. আপনার profile picture file কে `profile.jpg` নাম দিয়ে repository তে upload করুন
2. `index.html` file এ `.image-placeholder` div replace করুন:

```html
<div class="image-placeholder">
    <img src="profile.jpg" alt="Profile Picture" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

## 🌐 Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 📧 Support

কোন সমস্যা হলে যোগাযোগ করুন:
- Email: saifibnaezhararko1@gmail.com
- GitHub: @saifibnaezhararko

## 📝 License

এই template টি free to use এবং modify করতে পারবেন।

---

**Made with ❤️ by Claude & Saif**
