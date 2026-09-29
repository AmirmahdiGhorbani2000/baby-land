"use strict";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks)
{
menuToggle.addEventListener("click", function ()
{
navLinks.classList.toggle("open");
document.body.style.overflow = navLinks.classList.contains("open") ? "hidden" : "";
});
}

document.querySelectorAll(".nav-links a").forEach(function (link)
{
link.addEventListener("click", function ()
{
navLinks.classList.remove("open");
document.body.style.overflow = "";
});
});

function scrollToProducts()
{
const el = document.getElementById("products");
if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToContact()
{
const el = document.getElementById("contact");
if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleSubmit(event)
{
event.preventDefault();

const form = event.target;
const name = form.querySelector("#name").value.trim();
const email = form.querySelector("#email").value.trim();
const message = form.querySelector("#message").value.trim();

if (!name || !email || !message)
{
showToast("لطفاً تمام فیلدها را پر کنید", "warning");
return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email))
{
showToast("ایمیل وارد شده معتبر نیست", "error");
return;
}

showToast("پیام شما با موفقیت ارسال شد. با شما تماس می‌گیریم.", "success");
form.reset();
}

function showToast(text, type)
{
const existing = document.querySelector(".toast");
if (existing) existing.remove();

const toast = document.createElement("div");
toast.className = "toast toast-" + (type || "info");
toast.textContent = text;

toast.style.cssText = [
"position: fixed",
"bottom: 30px",
"left: 50%",
"transform: translateX(-50%) translateY(20px)",
"padding: 14px 28px",
"border-radius: 999px",
"color: #ffffff",
"font-family: 'Vazirmatn', sans-serif",
"font-size: 0.9rem",
"font-weight: 700",
"box-shadow: 0 10px 30px rgba(0,0,0,0.25)",
"z-index: 9999",
"opacity: 0",
"transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
"pointer-events: none",
"direction: rtl",
"white-space: nowrap"
].join(";");

if (type === "success")
{
toast.style.background = "linear-gradient(135deg, #4caf50, #66bb6a)";
}
else if (type === "error")
{
toast.style.background = "linear-gradient(135deg, #f44336, #ef5350)";
}
else if (type === "warning")
{
toast.style.background = "linear-gradient(135deg, #ff9800, #ffb74d)";
}
else
{
toast.style.background = "linear-gradient(135deg, #f48fb1, #90caf9)";
}

document.body.appendChild(toast);

requestAnimationFrame(function ()
{
toast.style.opacity = "1";
toast.style.transform = "translateX(-50%) translateY(0)";
});

setTimeout(function ()
{
toast.style.opacity = "0";
toast.style.transform = "translateX(-50%) translateY(20px)";
setTimeout(function () { toast.remove(); }, 350);
}, 3000);
}

const productsGrid = document.getElementById("productsGrid");

if (productsGrid)
{
productsGrid.addEventListener("click", function (event)
{
const btn = event.target.closest(".btn-add");
if (!btn) return;

const card = btn.closest(".product-card");
const title = card.querySelector("h3").textContent;

btn.disabled = true;
btn.textContent = "✓ اضافه شد";
btn.classList.add("added");

showToast(title + " به سبد خرید اضافه شد", "success");

setTimeout(function ()
{
btn.disabled = false;
btn.textContent = "افزودن";
btn.classList.remove("added");
}, 2500);
});
}

const observerOptions = {
threshold: 0.15,
rootMargin: "0px 0px -80px 0px"
};

const revealObserver = new IntersectionObserver(function (entries)
{
entries.forEach(function (entry)
{
if (entry.isIntersecting)
{
entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";
revealObserver.unobserve(entry.target);
}
});
}, observerOptions);

document.querySelectorAll(".feature-card, .product-card, .about-grid, .contact-grid").forEach(function (el)
{
el.style.opacity = "0";
el.style.transform = "translateY(30px)";
el.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
revealObserver.observe(el);
});

let lastScrollY = 0;
const navbar = document.querySelector(".navbar");

if (navbar)
{
window.addEventListener("scroll", function ()
{
const currentScrollY = window.scrollY;

if (currentScrollY > 60)
{
navbar.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.15)";
}
else
{
navbar.style.boxShadow = "none";
}

lastScrollY = currentScrollY;
}, { passive: true });
}

document.querySelectorAll('a[href^="#"]').forEach(function (anchor)
{
anchor.addEventListener("click", function (event)
{
const href = this.getAttribute("href");
if (href === "#") return;

const target = document.querySelector(href);
if (!target) return;

event.preventDefault();
target.scrollIntoView({ behavior: "smooth", block: "start" });
});
});

const heroItems = document.querySelectorAll(".floating-item");
if (heroItems.length)
{
window.addEventListener("mousemove", function (event)
{
const x = (event.clientX / window.innerWidth - 0.5) * 20;
const y = (event.clientY / window.innerHeight - 0.5) * 20;

heroItems.forEach(function (item, index)
{
const depth = (index + 1) * 0.3;
item.style.transform = "translate(" + (x * depth) + "px, " + (y * depth) + "px)";
});
}, { passive: true });
}

document.addEventListener("DOMContentLoaded", function ()
{
console.log("🍼 BabyLanding — Loaded successfully");
console.log("📧 Contact: baby4221306@gmail.com");
console.log("📞 Telephone: 09127291008");
console.log("📄 License: GNU General Public License v3.0");
});
