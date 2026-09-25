(function(){

  /* =========================================================
     PROPERTY DATA — edit this array to update your listings.
     images: first image shows on the card; all images show in
     the gallery. Replace every placeholder URL with your real
     photos (e.g. /images/property-1-1.jpg after you upload them).
     whatsapp message is built automatically from name/area/rent.
     ========================================================= */
  var WHATSAPP_NUMBER = "917020021251"; // country code, no + and no spaces
  var CALL_NUMBER = "+917020021251";

  var properties = [
    {
      name: "Fully Furnished Office Space for Rent in Baner",
      loc: "📍 Location: Baner, Pune",
      landmark: "Landmark: BATA Showroom",
      area: "1,100 sq. ft.",
      rent: "₹90,000",
      furnish: "Fully Furnished",
      floor: "2nd floor",
      availability: "Ready to move",
      tag: "100% DG Backup",
      workstations: "15 Workstations",
      cabins: "1 Private Cabin",
      parking: "2 Reserved Car Parking Spaces",
      highlights: [
        "1,100 sq. ft. Fully Furnished Office",
        "15 Workstations",
        "1 Private Cabin",
        "1 Conference Room",
        "2 Reserved Car Parking Spaces",
        "100% DG Power Backup",
        "Monthly Rent: ₹90,000"
      ],
      idealFor: "Startups, IT Companies, Agencies, Consultancies & Growing Businesses",
      cta: "Enquire Now to schedule a site visit.",
      desc: "Fully Furnished Office Space for Rent in Baner.\n\n📍 Location: Baner, Pune\nLandmark: BATA Showroom\n\nProperty Highlights:\n• 1,100 sq. ft. Fully Furnished Office\n• 15 Workstations\n• 1 Private Cabin\n• 1 Conference Room\n• 2 Reserved Car Parking Spaces\n• 100% DG Power Backup\n• Monthly Rent: ₹90,000\n\nIdeal for:\nStartups, IT Companies, Agencies, Consultancies & Growing Businesses\n\nCTA: Enquire Now to schedule a site visit.",
      images: [
        "img/properties/propset5/1.jpeg",
        "img/properties/propset5/2.jpeg",
        "img/properties/propset5/4.jpeg",
        "img/properties/propset5/3.jpeg",
        "img/properties/propset5/07Aug20232129550.jpg.jpeg"
      ]
    },
    {
      name: "Fully Furnished Office Space for Rent in Balewadi",
      loc: "📍 Location: Balewadi, Pune",
      landmark: "Landmark: Gai Chowk",
      area: "1,250 sq. ft.",
      rent: "₹80,000",
      furnish: "Fully Furnished",
      floor: "3rd floor",
      availability: "Ready to move",
      tag: "Walk-in Ready",
      workstations: "10 Workstations",
      cabins: "1 Private Cabin",
      parking: "1 Reserved Car Parking",
      highlights: [
        "1,250 sq. ft. Fully Furnished Office",
        "10 Workstations",
        "1 Private Cabin",
        "1 Conference Room",
        "Reception & Waiting Area",
        "Pantry",
        "1 Reserved Car Parking",
        "Monthly Rent: ₹80,000"
      ],
      idealFor: "Startups, IT Companies, Agencies, Consultancies & Growing Businesses",
      cta: "Enquire Now to schedule a site visit.",
      desc: "Fully Furnished Office Space for Rent in Balewadi.\n\n📍 Location: Balewadi, Pune\nLandmark: Gai Chowk\n\nProperty Highlights:\n• 1,250 sq. ft. Fully Furnished Office\n• 10 Workstations\n• 1 Private Cabin\n• 1 Conference Room\n• Reception & Waiting Area\n• Pantry\n• 1 Reserved Car Parking\n• Monthly Rent: ₹80,000\n\nIdeal for:\nStartups, IT Companies, Agencies, Consultancies & Growing Businesses\n\nCTA: Enquire Now to schedule a site visit.",
      images: [
        "img/properties/propset2/09Jun20261810170.png",
        "img/properties/propset2/09Jun20261810380.png",
        "img/properties/propset2/09Jun20261810580.png",
        "img/properties/propset2/09Jun20261811150.png",
        "img/properties/propset2/09Jun20261811330.png"
      ]
    },
    {
      name: "Fully Furnished Office Space for Rent in Baner",
      loc: "📍 Location: Baner, Pune",
      landmark: "Landmark: Pancard Club Road",
      area: "1,500 sq. ft.",
      rent: "₹1,00,000",
      furnish: "Fully Furnished",
      floor: "4th floor",
      availability: "Ready to move",
      tag: "Fully Furnished",
      workstations: "20 Workstations",
      cabins: "2 Private Cabins",
      parking: "1 Reserved Car Parking",
      highlights: [
        "1,500 sq. ft. Fully Furnished Office",
        "20 Workstations",
        "2 Private Cabins",
        "1 Conference Room",
        "Attached Washroom",
        "1 Reserved Car Parking",
        "Monthly Rent: ₹1,00,000"
      ],
      idealFor: "IT Companies, Startups, Agencies, Consultancies & Growing Businesses",
      cta: "Enquire Now to schedule a site visit.",
      desc: "Fully Furnished Office Space for Rent in Baner.\n\n📍 Location: Baner, Pune\nLandmark: Pancard Club Road\n\nProperty Highlights:\n• 1,500 sq. ft. Fully Furnished Office\n• 20 Workstations\n• 2 Private Cabins\n• 1 Conference Room\n• Attached Washroom\n• 1 Reserved Car Parking\n• Monthly Rent: ₹1,00,000\n\nIdeal for:\nIT Companies, Startups, Agencies, Consultancies & Growing Businesses\n\nCTA: Enquire Now to schedule a site visit.",
      images: [
        "img/properties/propset1/1.jpeg",
        "img/properties/propset1/2.jpeg",
        "img/properties/propset1/3.jpeg",
        "img/properties/propset1/5.jpeg"
      ]
    },
    {
      name: "Fully Furnished Office Space for Rent in Baner",
      loc: "📍 Location: Baner, Pune",
      landmark: "Landmark: BATA Showroom",
      area: "1,800 sq. ft.",
      rent: "₹1,35,000",
      furnish: "Fully Furnished",
      floor: "3rd floor",
      availability: "Ready to move",
      tag: "100% DG Backup",
      workstations: "25 Workstations",
      cabins: "1 Private Cabin",
      parking: "2 Reserved Car Parking Spaces",
      highlights: [
        "1,800 sq. ft. Fully Furnished Office",
        "25 Workstations",
        "1 Private Cabin",
        "1 Conference Room",
        "Centralized AC",
        "2 Reserved Car Parking Spaces",
        "100% DG Power Backup",
        "Monthly Rent: ₹1,35,000"
      ],
      idealFor: "IT Companies, Startups, Agencies, Consultancies & Growing Businesses",
      cta: "Enquire Now to schedule a site visit.",
      desc: "Fully Furnished Office Space for Rent in Baner.\n\n📍 Location: Baner, Pune\nLandmark: BATA Showroom\n\nProperty Highlights:\n• 1,800 sq. ft. Fully Furnished Office\n• 25 Workstations\n• 1 Private Cabin\n• 1 Conference Room\n• Centralized AC\n• 2 Reserved Car Parking Spaces\n• 100% DG Power Backup\n• Monthly Rent: ₹1,35,000\n\nIdeal for:\nIT Companies, Startups, Agencies, Consultancies & Growing Businesses\n\nCTA: Enquire Now to schedule a site visit.",
      images: [
        "img/properties/propset3/WhatsApp Image 2026-09-17 at 3.54.02 PM.jpeg",
        "img/properties/propset3/WhatsApp Image 2026-09-17 at 3.54.03 PM.jpeg",
        "img/properties/propset3/WhatsApp Image 2026-09-17 at 3.54.04 PM.jpeg"
      ]
    },
    {
      name: "Furnished Office Space for Rent in Balewadi",
      loc: "📍 Location: Balewadi, Pune",
      landmark: "",
      area: "1,600 sq. ft.",
      rent: "₹1,20,000",
      furnish: "Furnished",
      floor: "5th floor",
      availability: "Ready to move",
      tag: "24×7 Security",
      workstations: "25 Workstations",
      cabins: "2 Private Cabins",
      parking: "1 Reserved Car Parking",
      highlights: [
        "1,600 sq. ft. Furnished Office",
        "25 Workstations",
        "2 Private Cabins",
        "1 Conference Room",
        "Reception & Waiting Area",
        "Pantry",
        "Attached Washroom",
        "1 Reserved Car Parking",
        "24×7 Security",
        "Monthly Rent: ₹1,20,000"
      ],
      idealFor: "IT Companies, Startups, Agencies, Consultancies & Growing Businesses",
      cta: "Enquire Now to schedule a site visit.",
      desc: "Furnished Office Space for Rent in Balewadi.\n\n📍 Location: Balewadi, Pune\n\nProperty Highlights:\n• 1,600 sq. ft. Furnished Office\n• 25 Workstations\n• 2 Private Cabins\n• 1 Conference Room\n• Reception & Waiting Area\n• Pantry\n• Attached Washroom\n• 1 Reserved Car Parking\n• 24×7 Security\n• Monthly Rent: ₹1,20,000\n\nIdeal for:\nIT Companies, Startups, Agencies, Consultancies & Growing Businesses\n\nCTA: Enquire Now to schedule a site visit.",
      images: [
        "img/properties/propset4/08Nov20250942170.jpeg",
        "img/properties/propset4/08Nov20250942181.jpeg",
        "img/properties/propset4/08Nov20250942182.jpeg",
        "img/properties/propset4/08Nov20250942183.jpeg"
      ]
    }
  ];

  function esc(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function isLetterboxed(src){
    if(!src) return false;
    return src.indexOf("propset2") !== -1 ||
           src.indexOf("propset1/2.jpeg") !== -1 ||
           src.indexOf("08Nov20250942185.jpeg") !== -1 ||
           src.indexOf("08Nov20250942561.jpeg") !== -1 ||
           src.indexOf("07Aug20232129550") !== -1 ||
           src.indexOf("05Aug20251642162") !== -1;
  }

  /* ---- render the 5 cards ---- */
  var grid = document.getElementById("propGrid");
  properties.forEach(function(p, idx){
    var card = document.createElement("div");
    card.className = "prop-card";
    var locDisplay = esc(p.loc) + (p.landmark ? ' <span style="font-weight:500; opacity:.85;">· ' + esc(p.landmark) + '</span>' : '');
    var isLb = isLetterboxed(p.images[0]);
    var badgesHtml = '<div class="prop-badges">' +
      (p.availability ? '<span class="prop-available">'+esc(p.availability)+'</span>' : '') +
      (p.tag ? '<span class="prop-tag">'+esc(p.tag)+'</span>' : '') +
    '</div>';
    card.innerHTML =
      '<div class="prop-art">' +
        '<img class="prop-photo' + (isLb ? ' img-letterboxed' : '') + '" src="'+esc(p.images[0])+'" alt="'+esc(p.name)+'" loading="lazy">' +
        badgesHtml +
      '</div>' +
      '<div class="prop-body">' +
        '<div><div class="prop-name">'+esc(p.name)+'</div><div class="prop-loc">'+locDisplay+'</div></div>' +
        '<div class="prop-specs"><span><b>'+esc(p.area)+'</b>Area</span><span><b>'+esc(p.furnish)+'</b>Status</span></div>' +
        '<div class="prop-rent">'+esc(p.rent)+'<span>/month</span></div>' +
        '<div class="prop-actions">' +
          '<a class="btn-wa-card" href="https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent("Hi, I am interested in " + p.name + " (" + (p.landmark ? p.loc + ", " + p.landmark : p.loc) + ", " + p.area + ", " + p.rent + "/month). Enquire Now to schedule a site visit.")+'" target="_blank" rel="noopener">' +
            '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.94 9.94 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" stroke="#1D8A4A" stroke-width="1.3"/><path d="M8.5 8.7c.15-.5.6-.5 1-.5.3 0 .5 0 .7.5.2.5.6 1.6.65 1.7.05.15.1.3 0 .5-.1.2-.15.3-.3.45-.15.15-.3.35-.45.45-.15.15-.3.3-.15.55.15.25.7 1.15 1.5 1.85 1 .9 1.85 1.2 2.1 1.35.25.15.4.1.55-.05.15-.15.65-.75.8-1 .15-.25.3-.2.5-.1.2.05 1.3.6 1.5.7.2.1.35.15.4.25.05.15.05.75-.2 1.45-.25.7-1.45 1.35-2 1.4-.55.05-.55.4-3.4-.75-2.85-1.15-4.55-4-4.7-4.2-.15-.2-1.15-1.55-1.15-2.95 0-1.4.75-2.1.95-2.35z" fill="#1D8A4A"/></svg>' +
            'WhatsApp' +
          '</a>' +
          '<button class="prop-more" data-idx="'+idx+'">Read More</button>' +
        '</div>' +
      '</div>';
    grid.appendChild(card);
  });

  /* ---- gallery modal ---- */
  var overlay   = document.getElementById("modalOverlay");
  var titleEl   = document.getElementById("modalTitle");
  var specsEl   = document.getElementById("modalSpecs");
  var descEl    = document.getElementById("modalDesc");
  var waEl      = document.getElementById("modalWA");
  var mainImg   = document.getElementById("mgMainImg");
  var thumbsEl  = document.getElementById("mgThumbs");
  var countEl   = document.getElementById("mgCount");
  var prevBtn   = document.getElementById("mgPrev");
  var nextBtn   = document.getElementById("mgNext");
  var closeBtn  = document.getElementById("modalClose");

  var current = null, imgIdx = 0, lastFocus = null;

  function renderImage(){
    if(!current) return;
    var src = current.images[imgIdx];
    mainImg.src = src;
    mainImg.alt = current.name + " photo " + (imgIdx+1);
    mainImg.className = isLetterboxed(src) ? "img-letterboxed" : "";
    countEl.textContent = (imgIdx+1) + " / " + current.images.length;
    Array.prototype.forEach.call(thumbsEl.children, function(t, i){
      t.classList.toggle("on", i === imgIdx);
    });
    var single = current.images.length < 2;
    prevBtn.style.display = single ? "none" : "flex";
    nextBtn.style.display = single ? "none" : "flex";
  }

  function openModal(idx){
    var p = properties[idx];
    current = p; imgIdx = 0;

    titleEl.textContent = p.name;
    var specsHtml =
      '<div><div class="l">Area</div><div class="v">'+esc(p.area)+'</div></div>' +
      '<div><div class="l">Monthly Rent</div><div class="v">'+esc(p.rent)+'</div></div>' +
      '<div><div class="l">Furnishing</div><div class="v">'+esc(p.furnish)+'</div></div>';
    if(p.workstations) specsHtml += '<div><div class="l">Workstations</div><div class="v">'+esc(p.workstations)+'</div></div>';
    if(p.cabins) specsHtml += '<div><div class="l">Private Cabins</div><div class="v">'+esc(p.cabins)+'</div></div>';
    if(p.parking) specsHtml += '<div><div class="l">Parking</div><div class="v">'+esc(p.parking)+'</div></div>';
    if(p.availability) specsHtml += '<div><div class="l">Availability</div><div class="v">'+esc(p.availability)+'</div></div>';
    specsHtml += '<div><div class="l">Location</div><div class="v">'+esc(p.loc)+'</div></div>';
    specsEl.innerHTML = specsHtml;

    var descHtml = '';
    if(p.landmark) {
      descHtml += '<p style="margin:0 0 10px 0;"><strong>' + esc(p.landmark) + '</strong></p>';
    }
    descHtml += '<p style="margin:0 0 8px 0; font-weight:700;">Property Highlights:</p>';
    descHtml += '<ul style="margin:0 0 14px 18px; padding:0; line-height:1.6;">';
    p.highlights.forEach(function(h){
      descHtml += '<li>' + esc(h) + '</li>';
    });
    descHtml += '</ul>';
    descHtml += '<p style="margin:0 0 10px 0;"><strong>Ideal for:</strong> ' + esc(p.idealFor) + '</p>';
    descHtml += '<p style="margin:0; font-weight:600; color:var(--red);"><strong>CTA:</strong> ' + esc(p.cta) + '</p>';
    descEl.innerHTML = descHtml;

    thumbsEl.innerHTML = p.images.map(function(src, i){
      var lb = isLetterboxed(src) ? ' class="img-letterboxed"' : '';
      return '<div class="mg-thumb-item" data-i="'+i+'"><img src="'+esc(src)+'" alt="'+esc(p.name)+' thumbnail '+(i+1)+'"'+lb+'></div>';
    }).join("");
    Array.prototype.forEach.call(thumbsEl.children, function(t){
      t.addEventListener("click", function(){ imgIdx = parseInt(t.getAttribute("data-i"), 10); renderImage(); });
    });
    renderImage();

    var waText = "Hi, I am interested in " + p.name + " (" + (p.landmark ? p.loc + ", " + p.landmark : p.loc) + ", " + p.area + ", " + p.rent + "/month). " + p.cta;
    waEl.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(waText);

    lastFocus = document.activeElement;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal(){
    overlay.classList.remove("open");
    document.body.style.overflow = "";
    current = null;
    if(lastFocus) lastFocus.focus();
  }

  grid.addEventListener("click", function(e){
    var btn = e.target.closest(".prop-more");
    if(btn) openModal(Number(btn.dataset.idx));
  });
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", function(e){ if(e.target === overlay) closeModal(); });
  prevBtn.addEventListener("click", function(){ if(!current) return; imgIdx = (imgIdx - 1 + current.images.length) % current.images.length; renderImage(); });
  nextBtn.addEventListener("click", function(){ if(!current) return; imgIdx = (imgIdx + 1) % current.images.length; renderImage(); });
  document.addEventListener("keydown", function(e){
    if(!overlay.classList.contains("open")) return;
    if(e.key === "Escape") closeModal();
    if(e.key === "ArrowLeft") prevBtn.click();
    if(e.key === "ArrowRight") nextBtn.click();
  });

  /* ---- Clients marquee (unchanged from original) ---- */
  var clients = ["Speedjet Aviation","Fortessa Pharma","RMS Credit Capital","CloudTech Solutions","FinEdge Digital","Baner Health Center","Vantage Logistics","Northline Systems"];
  var track = document.getElementById("marqueeTrack");
  var loopSet = clients.concat(clients); // duplicate for seamless loop
  loopSet.forEach(function(name){
    var chip = document.createElement("div");
    chip.className = "client-chip";
    chip.textContent = name;
    track.appendChild(chip);
  });

  /* ---- Testimonials marquee (auto-scroll right to left, no arrows) ---- */
  var testimonials = [
    { text:"We needed 2,000 sq.ft. in Baner within three weeks. Alliance shortlisted properties that actually matched our budget — no wasted site visits.", initials:"OL", name:"Operations Lead", role:"Logistics & Aviation Services firm" },
    { text:"Dealing directly with the leasing team, without a broker's commission added on, made the whole negotiation simpler.", initials:"FM", name:"Finance Manager", role:"Pharmaceutical company" },
    { text:"Alliance found us a fully furnished office in under a week. The site visit, negotiation and lease signing all happened without a single broker call.", initials:"HR", name:"HR Head", role:"Fintech company" },
    { text:"Transparent pricing from day one — no last-minute add-ons. Exactly what was quoted is what we signed for.", initials:"CT", name:"Co-founder", role:"CloudTech Solutions" }
  ];
  var testiTrack = document.getElementById("testiTrack");
  var testiLoop = testimonials.concat(testimonials); // duplicate for seamless loop
  testiLoop.forEach(function(t){
    var card = document.createElement("div");
    card.className = "testi-chip";
    card.innerHTML =
      '<span class="quote-mark">&ldquo;</span>' +
      '<p class="text">'+esc(t.text)+'</p>' +
      '<div class="testi-who">' +
        '<div class="testi-avatar">'+esc(t.initials)+'</div>' +
        '<div><div class="name">'+esc(t.name)+'</div><div class="role">'+esc(t.role)+'</div></div>' +
      '</div>';
    testiTrack.appendChild(card);
  });

  /* ---- Header "Enquire Now" — number lives here, not shown in the UI ---- */
  var enquireBtn = document.getElementById("enquireNowBtn");
  if(enquireBtn){
    var enquireText = "Hi, I'd like to enquire about a commercial property in Baner.";
    enquireBtn.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(enquireText);
    enquireBtn.target = "_blank";
    enquireBtn.rel = "noopener";
  }

})();
