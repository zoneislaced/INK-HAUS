// ================= DATA LAYER =================
const navItems = [
    { label: "Home", href: "#home" },
    { label: "Studio", href: "#studio" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Artists", href: "#artists" },
    { label: "Contact", href: "#contact" }
];

const marqueeWords = ["Blackwork", "Realism", "Traditional", "Geometric", "Dotwork", "Japanese", "Fine Line", "Cover-Ups"];

const stats = [
    { value: "15+", label: "Years of Craft" },
    { value: "12K+", label: "Tattoos Done" },
    { value: "8", label: "Master Artists" },
    { value: "25", label: "Industry Awards" }
];

const studioImages = [
    { src: "https://picsum.photos/500/600?random=2", alt: "Artist tattooing a client in the studio", offset: false },
    { src: "https://picsum.photos/500/600?random=3", alt: "Freshly completed tattoo artwork", offset: true },
    { src: "https://picsum.photos/500/600?random=4", alt: "Modern studio interior with equipment", offset: false },
    { src: "https://picsum.photos/500/600?random=5", alt: "Artist sketching a custom design", offset: true }
];

const galleryFilters = [
    { key: "all", label: "All Works" },
    { key: "blackwork", label: "Blackwork" },
    { key: "realism", label: "Realism" },
    { key: "traditional", label: "Traditional" },
    { key: "geometric", label: "Geometric" }
];

const galleryItems = [
    { id: 1, src: "https://picsum.photos/600/750?random=101", alt: "Blackwork geometric forearm tattoo", title: "Sacred Geometry Sleeve", category: "blackwork", artist: "Baraka" },
    { id: 2, src: "https://picsum.photos/600/750?random=102", alt: "Photorealistic lion portrait tattoo", title: "Regal Lion Portrait", category: "realism", artist: "Amina" },
    { id: 3, src: "https://picsum.photos/600/750?random=103", alt: "Traditional anchor tattoo with banner", title: "Classic Anchor", category: "traditional", artist: "Kiptoo" },
    { id: 4, src: "https://picsum.photos/600/750?random=104", alt: "Geometric wolf head tattoo", title: "Wolf Geometry", category: "geometric", artist: "Wanjiku" },
    { id: 5, src: "https://picsum.photos/600/750?random=105", alt: "Blackwork floral shoulder piece", title: "Dark Bloom", category: "blackwork", artist: "Baraka" },
    { id: 6, src: "https://picsum.photos/600/750?random=106", alt: "Realistic eye tattoo on inner arm", title: "Third Eye", category: "realism", artist: "Amina" },
    { id: 7, src: "https://picsum.photos/600/750?random=107", alt: "Traditional rose and dagger tattoo", title: "Rose & Dagger", category: "traditional", artist: "Kiptoo" },
    { id: 8, src: "https://picsum.photos/600/750?random=108", alt: "Geometric linework back tattoo", title: "Spine Lines", category: "geometric", artist: "Wanjiku" },
    { id: 9, src: "https://picsum.photos/600/750?random=109", alt: "Blackwork snake wrapping forearm", title: "Serpent Coil", category: "blackwork", artist: "Baraka" },
    { id: 10, src: "https://picsum.photos/600/750?random=110", alt: "Realistic portrait of a woman tattoo", title: "Grace", category: "realism", artist: "Amina" },
    { id: 11, src: "https://picsum.photos/600/750?random=111", alt: "Japanese koi fish tattoo", title: "Koi Ascending", category: "traditional", artist: "Kiptoo" },
    { id: 12, src: "https://picsum.photos/600/750?random=112", alt: "Geometric mandala tattoo on thigh", title: "Mandala Prime", category: "geometric", artist: "Wanjiku" }
];

const services = [
    { icon: "fa-pen-nib", name: "Custom Design", styleKey: "Custom", price: "FROM Ksh 18,000", desc: "Fully bespoke pieces drawn from scratch — your idea, our artistry." },
    { icon: "fa-slash", name: "Fine Line", styleKey: "Fine Line", price: "FROM Ksh 15,000", desc: "Delicate, precise linework for minimalist and intricate designs." },
    { icon: "fa-fill-drip", name: "Blackwork", styleKey: "Blackwork", price: "FROM Ksh 18,000", desc: "Bold, saturated blacks for graphic, tribal, and abstract statements." },
    { icon: "fa-camera-retro", name: "Realism", styleKey: "Realism", price: "FROM Ksh 25,000", desc: "Photorealistic portraits, wildlife, and scenes with sculpted depth." },
    { icon: "fa-water", name: "Japanese", styleKey: "Traditional", price: "FROM Ksh 22,000", desc: "Traditional motifs — koi, dragons, waves — composed authentically." },
    { icon: "fa-drafting-compass", name: "Geometric", styleKey: "Geometric", price: "FROM Ksh 20,000", desc: "Sacred geometry and precise patterns, mathematically balanced." },
    { icon: "fa-shield-alt", name: "Cover-Ups", styleKey: "Cover-Up", price: "FROM Ksh 25,000", desc: "Transform old or unwanted ink into a fresh, confident piece." },
    { icon: "fa-comments", name: "Consultation", styleKey: "Not Sure Yet", price: "FREE", desc: "Meet your artist to discuss ideas, sizing, placement, and aftercare." }
];

const artists = [
    { id: "baraka", name: 'Baraka "Iron" Juma', role: "Founder · Blackwork", img: "https://picsum.photos/400/500?random=201", bio: "15+ years in the chair. Baraka leads the studio with a passion for bold blackwork and geometric precision." },
    { id: "amina", name: "Amina Mwangi", role: "Realism & Portraits", img: "https://picsum.photos/400/500?random=202", bio: "Award-winning portrait artist whose pieces have been featured in regional ink magazines across East Africa." },
    { id: "kiptoo", name: "Kiptoo Koech", role: "Traditional & Neo-Traditional", img: "https://picsum.photos/400/500?random=203", bio: "Master of bold lines and striking color contrast, bringing fierce heritage and custom motifs to life." },
    { id: "wanjiku", name: "Wanjiku Njoroge", role: "Fine Line & Geometric", img: "https://picsum.photos/400/500?random=204", bio: "Known for ultra-fine linework and sacred geometry, Wanjiku's minimal aesthetic is in high demand." }
];

const testimonials = [
    { quote: "The attention to detail was unreal. From consultation to aftercare, everything felt world-class right here in town. I'm already planning my next piece.", name: "Brenda K.", piece: "Geometric Sleeve", rating: 5 },
    { quote: "Best studio in Nairobi CBD, hands down. Clean, professional, and the artists genuinely care about your vision.", name: "Brian O.", piece: "Traditional Back Piece", rating: 5 },
    { quote: "Walked in with a rough idea, walked out with a masterpiece. Baraka is a true artist.", name: "Kevin M.", piece: "Blackwork Chest", rating: 5 }
];

const footerCols = [
    {
        title: "Explore",
        items: [
            { label: "Home", href: "#home" },
            { label: "Studio", href: "#studio" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "Services", href: "#services" },
            { label: "Artists", href: "#artists" }
        ]
    },
    {
        title: "Studio",
        items: [
            { label: "Book a Session", href: "#contact" },
            { label: "Free Consultation", href: "#contact" },
            { label: "Aftercare Guide", href: "#contact" },
            { label: "Walk-Ins", href: "#contact" }
        ]
    }
];

const socials = [
    { name: "Instagram", icon: "fa-instagram", handle: "inkhausnbi" },
    { name: "Facebook", icon: "fa-facebook-f", handle: "inkhausstudio" },
    { name: "Twitter", icon: "fa-twitter", handle: "inkhausnbi" },
    { name: "Pinterest", icon: "fa-pinterest-p", handle: "inkhausnbi" }
];

const contactInfo = [
    { icon: "fa-map-marker-alt", title: "Visit the Studio", lines: ["Kimathi Street, Pioneer House, 4th Floor", "Nairobi CBD, Kenya"] },
    { icon: "fa-phone-alt", title: "Call Us", lines: ["+254 712 345 678"] },
    { icon: "fa-clock", title: "Hours", lines: ["Tue – Sat: 10:00 AM – 8:00 PM", "Sun – Mon: Closed"] }
];

const styleOptions = ["Blackwork", "Realism", "Traditional", "Geometric", "Fine Line", "Cover-Up", "Not Sure Yet"];

// ================= STATE MANAGEMENT =================
let state = {
    category: "all",
    artist: "any",
    style: styleOptions[0]
};

function readStateFromURL() {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    const artistParam = params.get("artist");
    const styleParam = params.get("style");

    if (categoryParam && galleryFilters.some(f => f.key === categoryParam.toLowerCase())) {
        state.category = categoryParam.toLowerCase();
    }
    if (artistParam && (artistParam === "any" || artists.some(a => a.id === artistParam.toLowerCase()))) {
        state.artist = artistParam.toLowerCase();
    }
    if (styleParam && styleOptions.some(s => s.toLowerCase() === styleParam.toLowerCase())) {
        const matchedStyle = styleOptions.find(s => s.toLowerCase() === styleParam.toLowerCase());
        if (matchedStyle) state.style = matchedStyle;
    }
}

function updateURLState(replace = false) {
    const url = new URL(window.location.href);
    
    if (state.category && state.category !== "all") {
        url.searchParams.set("category", state.category);
    } else {
        url.searchParams.delete("category");
    }

    if (state.artist && state.artist !== "any") {
        url.searchParams.set("artist", state.artist);
    } else {
        url.searchParams.delete("artist");
    }

    if (state.style && state.style !== styleOptions[0]) {
        url.searchParams.set("style", state.style);
    } else {
        url.searchParams.delete("style");
    }

    if (replace) {
        window.history.replaceState(state, "", url.toString());
    } else {
        window.history.pushState(state, "", url.toString());
    }
}

// ================= RENDER FUNCTIONS =================
function renderNav(items, className) {
    return items.map(item => `
        <li><a href="${item.href}" class="${className}">${item.label}</a></li>
    `).join("");
}

function renderMarquee(items) {
    const inner = items.map(item => `
        <span class="mx-4 font-display text-xl sm:text-2xl uppercase tracking-widest text-black">${item} <i class="fas fa-star mx-2 text-black/70 text-sm"></i></span>
    `).join("");
    return inner + inner;
}

function renderStats(items) {
    return items.map(item => `
        <div>
            <p class="font-display text-5xl text-accent leading-none">${item.value}</p>
            <p class="mt-2 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">${item.label}</p>
        </div>
    `).join("");
}

function renderStudioImages(items) {
    return items.map(img => `
        <img src="${img.src}" alt="${img.alt}" loading="lazy"
             class="w-full h-60 sm:h-72 object-cover border border-white/10 ${img.offset ? "mt-8" : ""}">
    `).join("");
}

function renderFilters(items, active) {
    return items.map(item => `
        <button type="button" data-filter="${item.key}" aria-pressed="${item.key === active}"
            class="px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] border transition-colors duration-300 ${item.key === active
                ? "bg-accent border-accent text-black"
                : "border-white/15 text-zinc-400 hover:border-accent hover:text-accent"}">
            ${item.label}
        </button>
    `).join("");
}

function renderGallery(items, filter) {
    const filtered = filter === "all" ? items : items.filter(item => item.category === filter);
    return filtered.map(item => `
        <article class="group relative overflow-hidden border border-white/10 bg-[#141418]">
            <img src="${item.src}" alt="${item.alt}" loading="lazy"
                 class="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <p class="font-mono text-accent text-[11px] uppercase tracking-[0.25em]">${item.category}</p>
                <h3 class="font-display text-3xl text-white tracking-wide mt-1">${item.title}</h3>
                <p class="text-zinc-400 text-sm mt-1">by ${item.artist}</p>
            </div>
        </article>
    `).join("");
}

function renderServices(items) {
    return items.map(item => `
        <article class="group bg-[#141418] border border-white/10 p-7 hover:border-accent/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div>
                <div class="w-12 h-12 bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-lg group-hover:bg-accent group-hover:text-black transition-colors duration-300">
                    <i class="fas ${item.icon}"></i>
                </div>
                <h3 class="font-display text-2xl text-white tracking-wide mt-5">${item.name}</h3>
                <p class="font-mono text-accent text-[11px] tracking-[0.2em] mt-1.5">${item.price}</p>
                <p class="text-zinc-400 text-sm leading-relaxed mt-3">${item.desc}</p>
            </div>
            <a href="#contact" data-select-style="${item.styleKey}" class="mt-6 text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-accent flex items-center gap-2">
                Book This Style →
            </a>
        </article>
    `).join("");
}

function renderArtists(items) {
    return items.map(item => `
        <article class="group bg-[#141418] border border-white/10 hover:border-accent/50 transition-colors duration-300 flex flex-col justify-between">
            <div>
                <div class="overflow-hidden">
                    <img src="${item.img}" alt="${item.name}" loading="lazy"
                         class="w-full h-[380px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700">
                </div>
                <div class="p-6">
                    <h3 class="font-display text-2xl text-white tracking-wide">${item.name}</h3>
                    <p class="font-mono text-accent text-[11px] uppercase tracking-[0.2em] mt-1">${item.role}</p>
                    <p class="text-zinc-400 text-sm leading-relaxed mt-3">${item.bio}</p>
                </div>
            </div>
            <div class="px-6 pb-6">
                <a href="#contact" data-select-artist="${item.id}" class="inline-block w-full text-center bg-white/5 border border-white/10 py-2.5 font-mono text-xs uppercase tracking-widest text-zinc-300 hover:bg-accent hover:text-black hover:border-accent transition-colors duration-300">
                    Book Session
                </a>
            </div>
        </article>
    `).join("");
}

function renderTestimonials(items) {
    return items.map(item => `
        <article class="bg-[#141418] border border-white/10 p-8 hover:border-accent/40 transition-colors duration-300 flex flex-col">
            <div class="text-accent text-2xl mb-4"><i class="fas fa-quote-left"></i></div>
            <p class="text-zinc-300 leading-relaxed flex-1">&ldquo;${item.quote}&rdquo;</p>
            <div class="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                    <p class="font-semibold text-white">${item.name}</p>
                    <p class="text-sm text-zinc-500 mt-0.5">${item.piece}</p>
                </div>
                <div class="text-accent text-sm tracking-widest" aria-label="${item.rating} out of 5 stars">${"★".repeat(item.rating)}</div>
            </div>
        </article>
    `).join("");
}

function renderFooterCols(cols) {
    return cols.map(col => `
        <div>
            <p class="font-semibold text-white uppercase tracking-wider text-sm mb-4">${col.title}</p>
            <ul class="space-y-2.5 text-sm">
                ${col.items.map(item => `
                    <li><a href="${item.href}" class="text-zinc-500 hover:text-accent transition-colors">${item.label}</a></li>
                `).join("")}
            </ul>
        </div>
    `).join("");
}

function renderSocials(items) {
    return items.map(item => `
        <a href="#" data-social="${item.name}" data-handle="${item.handle}" aria-label="${item.name}"
           class="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-black hover:bg-accent hover:border-accent transition-colors duration-300">
            <i class="fab ${item.icon}"></i>
        </a>
    `).join("");
}

function renderContactInfo(items) {
    return items.map(item => `
        <div class="flex items-start gap-4">
            <div class="w-11 h-11 bg-accent/10 border border-accent/30 flex items-center justify-center text-accent shrink-0">
                <i class="fas ${item.icon}"></i>
            </div>
            <div>
                <p class="font-semibold text-white">${item.title}</p>
                ${item.lines.map(line => `<p class="text-zinc-400 text-sm">${line}</p>`).join("")}
            </div>
        </div>
    `).join("");
}

function syncUIWithState() {
    // Gallery state
    document.getElementById("gallery-grid").innerHTML = renderGallery(galleryItems, state.category);
    document.getElementById("gallery-filters").innerHTML = renderFilters(galleryFilters, state.category);

    // Form inputs state
    const styleSelect = document.getElementById("style");
    if (styleSelect) styleSelect.value = state.style;

    const artistSelect = document.getElementById("artist-select");
    if (artistSelect) artistSelect.value = state.artist;
}

// ================= MOUNT =================
document.addEventListener("DOMContentLoaded", function () {
    readStateFromURL();

    document.getElementById("nav-list").innerHTML = renderNav(navItems, "text-sm uppercase tracking-widest text-zinc-300 hover:text-accent transition-colors");
    document.getElementById("mobile-nav-list").innerHTML = renderNav(navItems, "block py-3 text-lg uppercase tracking-widest text-white hover:text-accent transition-colors border-b border-white/5");
    document.getElementById("marquee-track").innerHTML = renderMarquee(marqueeWords);
    document.getElementById("stats-grid").innerHTML = renderStats(stats);
    document.getElementById("studio-images").innerHTML = renderStudioImages(studioImages);
    document.getElementById("services-grid").innerHTML = renderServices(services);
    document.getElementById("artists-grid").innerHTML = renderArtists(artists);
    document.getElementById("testimonials-grid").innerHTML = renderTestimonials(testimonials);
    document.getElementById("footer-cols").innerHTML = renderFooterCols(footerCols);
    document.getElementById("social-icons").innerHTML = renderSocials(socials);
    document.getElementById("contact-info").innerHTML = renderContactInfo(contactInfo);
    
    // Select dropdown options
    document.getElementById("style").innerHTML = styleOptions.map(o => `<option value="${o}">${o}</option>`).join("");
    
    const artistOptions = [{ id: "any", name: "Any Available Artist" }, ...artists];
    document.getElementById("artist-select").innerHTML = artistOptions.map(a => `<option value="${a.id}">${a.name}</option>`).join("");

    // Initial render from state
    syncUIWithState();

    // LISTEN FOR BROWSER BACK/FORWARD
    window.addEventListener("popstate", function () {
        readStateFromURL();
        syncUIWithState();
    });

    // LISTEN TO FORM CHANGES & PERSIST TO URL
    document.getElementById("style").addEventListener("change", function (e) {
        state.style = e.target.value;
        updateURLState();
    });

    document.getElementById("artist-select").addEventListener("change", function (e) {
        state.artist = e.target.value;
        updateURLState();
    });

    // SHARE PORTFOLIO LINK BUTTON
    document.getElementById("share-portfolio-btn").addEventListener("click", function () {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showToast("Copied view link to clipboard!");
        }).catch(() => {
            showToast("Failed to copy link.");
        });
    });

    // ================= BEHAVIOR =================
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        const isHidden = mobileMenu.classList.toggle("hidden");
        menuToggle.setAttribute("aria-expanded", String(!isHidden));
        const icon = menuToggle.querySelector("i");
        icon.classList.toggle("fa-bars", isHidden);
        icon.classList.toggle("fa-times", !isHidden);
    });

    const header = document.getElementById("site-header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 40) {
            header.classList.add("bg-black/90", "backdrop-blur-xl", "border-b", "border-white/10");
        } else {
            header.classList.remove("bg-black/90", "backdrop-blur-xl", "border-b", "border-white/10");
        }
    }, { passive: true });

    function showToast(message) {
        const toast = document.getElementById("toast");
        toast.textContent = message;
        toast.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
        clearTimeout(toast._timer);
        toast._timer = setTimeout(function () {
            toast.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
        }, 2600);
    }

    // EVENT DELEGATION
    document.addEventListener("click", function (e) {
        const social = e.target.closest("[data-social]");
        if (social) {
            e.preventDefault();
            showToast("Follow @" + social.dataset.handle + " — coming soon!");
            return;
        }

        const filterBtn = e.target.closest("[data-filter]");
        if (filterBtn) {
            e.preventDefault();
            state.category = filterBtn.dataset.filter;
            updateURLState();
            syncUIWithState();
            return;
        }

        const selectStyleLink = e.target.closest("[data-select-style]");
        if (selectStyleLink) {
            const style = selectStyleLink.dataset.selectStyle;
            if (style) {
                state.style = style;
                updateURLState();
                syncUIWithState();
            }
        }

        const selectArtistLink = e.target.closest("[data-select-artist]");
        if (selectArtistLink) {
            const artistId = selectArtistLink.dataset.selectArtist;
            if (artistId) {
                state.artist = artistId;
                updateURLState();
                syncUIWithState();
            }
        }

        const link = e.target.closest("a[href^='#']");
        if (!link) return;
        e.preventDefault();
        const href = link.getAttribute("href");
        if (href === "#") return;
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });

        if (!mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("hidden");
            menuToggle.setAttribute("aria-expanded", "false");
            const icon = menuToggle.querySelector("i");
            icon.classList.add("fa-bars");
            icon.classList.remove("fa-times");
        }
    });

    // SCROLL REVEAL
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(function (el) {
        revealObserver.observe(el);
    });

    // BOOKING FORM
    document.getElementById("booking-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const success = document.getElementById("form-success");
        success.classList.remove("hidden");
        success.setAttribute("role", "status");
        this.reset();
        
        // Reset selections in state
        state.style = styleOptions[0];
        state.artist = "any";
        updateURLState();
        syncUIWithState();

        clearTimeout(this._timer);
        this._timer = setTimeout(function () {
            success.classList.add("hidden");
        }, 5000);
    });

    // NEWSLETTER FORM
    document.getElementById("newsletter-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const btn = this.querySelector("button");
        const input = this.querySelector('input[type="email"]');
        btn.innerHTML = '<i class="fas fa-check"></i>';
        btn.classList.add("bg-white");
        input.value = "";
        clearTimeout(this._timer);
        this._timer = setTimeout(function () {
            btn.innerHTML = "→";
            btn.classList.remove("bg-white");
        }, 2000);
    });
});