# BabyLand

فروشگاه آنلاین تخصصی پوشاک نوزاد و کودک.

## پشته فنی

- HTML5 semantic markup
- CSS3 با Custom Properties و Grid و Flexbox
- JavaScript ES2020 بدون وابستگی خارجی
- معماری Single Page با Smooth Scroll و IntersectionObserver

## معماری

سه فایل مستقل بدون build step و بدون dependency.

```

index.html      ساختار DOM، متادیتا، Open Graph
style.css       دیزاین سیستم، Layout، انیمیشن
script.js       تعاملات، اعتبارسنجی، رندر

```

## دیزاین سیستم

متغیرهای CSS در `:root` برای پالت رنگ، فاصله‌ها، شعاع گوشه‌ها و ترنزیشن‌ها. تم اصلی بر پایه گرادیان خطی بین صورتی و آبی روشن با پس‌زمینه radial تیره.

## قابلیت‌ها

- منوی موبایل responsive با toggle
- Smooth scroll با fallback anchor
- اعتبارسنجی فرم تماس با regex ایمیل
- سیستم Toast notification با سه سطح (success/warning/error)
- Reveal on scroll با IntersectionObserver
- Parallax effect روی عناصر Hero
- Micro-interaction روی کارت محصول با بازخورد وضعیت
- Navbar shadow داینامیک بر اساس موقعیت اسکرول

## ساختار DOM

هدر با navbar چسبان، بخش hero با کارت شیشه‌ای و عناصر شناور، بخش features با چهار کارت، بخش products با شش کارت محصول، بخش about با آمار، بخش contact با فرم و اطلاعات، فوتر.

## سازگاری

تمام مرورگرهای مدرن شامل Chrome 90+، Firefox 88+، Safari 14+، Edge 90+. Progressive enhancement برای مرورگرهای قدیمی‌تر.

## دسترس‌پذیری

- `lang="fa"` و `dir="rtl"` در root
- `aria-label` روی دکمه‌های تعاملی
- Contrast ratio مطابق WCAG AA
- Focus state روی فرم‌ها
- Semantic HTML5 (`header`, `section`, `footer`)

## عملکرد

- بدون framework و build tool
- Zero external dependency
- CSS Custom Properties برای runtime theming
- Passive event listeners برای scroll و mousemove
- requestAnimationFrame برای ترنزیشن‌های بصری

## نصب و اجرا

```bash
git clone https://github.com/AmirmahdiGhornani2000/baby-land.git
cd baby-landingpage
python3 -m http.server 8000
```

مرورگر: http://localhost:8000

## استقرار

سازگار با هر static host از قبیل GitHub Pages، Netlify، Vercel، Cloudflare Pages. بدون نیاز به server-side runtime.


## لایسنس

GNU General Public License v3.0








