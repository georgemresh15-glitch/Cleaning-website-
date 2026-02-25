// ===== Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Modal open/close
document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-modal-open]");
  const closeBtn = e.target.closest("[data-modal-close]");

  if (openBtn) {
    const sel = openBtn.getAttribute("data-modal-open");
    const modal = document.querySelector(sel);
    if (modal) {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    }
  }

  if (closeBtn) {
    const modal = closeBtn.closest(".modal");
    if (modal) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    }
  }
});
// ===== Simple i18n
const i18n = {
  nl: {
    brand_tag: "Maastricht & Limburg",
    nav_services: "Diensten",
    nav_about: "Over ons",
    nav_gallery: "Foto’s",
    nav_contact: "Contact",
    btn_prices: "Tarieven",

    hero_pill: "Maastricht • Limburg • Eco-vriendelijk",
    hero_title: "Professionele schoonmaak, met respect voor mens & natuur.",
    hero_subtitle: "Voor woning, kantoor en VvE’s. Duidelijke afspraken, flexibel gepland en netjes opgeleverd.",
    hero_cta_quote: "Vraag een offerte",
    hero_cta_whatsapp: "WhatsApp ons",
    hero_check_1: "Betrouwbaar & discreet",
    hero_check_2: "Flexibele planning",
    hero_check_3: "Eco-producten",
    hero_fastcontact: "Snel contact",
    hero_region_k: "Regio:",
    hero_fastnote: "We reageren meestal dezelfde dag.",

    val1_t: "Milieubewust",
    val1_d: "We gebruiken waar mogelijk eco-vriendelijke middelen.",
    val2_t: "Op maat",
    val2_d: "Wekelijks, tweewekelijks of eenmalig.",
    val3_t: "Duidelijk",
    val3_d: "Heldere afspraken en nette oplevering.",

    services_title: "Diensten",
    services_subtitle: "Voor particulieren, bedrijven en VvE’s in Maastricht en Limburg.",
    svc_cta: "Offerte aanvragen →",

    svc_home_title: "Woning schoonmaak",
    svc_home_price: "Vanaf €25/uur",
    svc_home_text: "Fris en netjes, met vaste afspraken. Ideaal voor wekelijks, tweewekelijks of eenmalig.",

    svc_office_title: "Kantoor schoonmaak",
    svc_office_price: "Vanaf €30/uur",
    svc_office_text: "Een rustige, schone werkplek — flexibel gepland rond jullie openingstijden.",
    svc_office_micro: "Bezoekfrequentie: 1×/wk • 2×/wk • 3×/wk+",

    svc_deep_title: "Deep Cleaning",
    svc_deep_price: "Vanaf €45/uur (min. 3 uur)",
    svc_deep_text: "Intensief en grondig: vet, kalk, hoeken en opgebouwde vervuiling — zichtbaar verschil.",

    svc_vve_title: "VvE (entree & trappenhuis)",
    svc_vve_price: "Vanaf €30/uur",
    svc_vve_text: "Voor gezamenlijke ruimtes: entree, trappen, leuningen en vloeren — vaste rondes, duidelijke afspraken.",
    svc_vve_micro: "Meestal: wekelijks of 2-wekelijks",

    svc_windows_title: "Glazenwasser",
    svc_windows_price: "Vanaf €35/uur",
    svc_windows_text: "Streeploos resultaat voor ramen en kozijnen — binnen of buiten, afhankelijk van bereikbaarheid.",

    svc_build_title: "Oplevering / Bouwschoonmaak",
    svc_build_price: "Vanaf €30/uur",
    svc_build_text: "Na verbouwing of verhuizing: stof, resten en detailwerk — klaar voor oplevering.",

    services_prices_btn: "Bekijk tariefuitleg",
    services_prices_note:
      "Tarieven zijn richtprijzen. Definitieve prijs altijd via offerte op basis van locatie, grootte en wensen.",

    about_title: "Over Crestamila",
    about_p1:
      "Wij zijn een schoonmaakservice actief in Maastricht en heel Limburg. We staan voor kwaliteit, betrouwbaarheid en duidelijke afspraken.",
    about_p2:
      "Of het nu gaat om een woning, kantoor of een VvE: we maken een plan dat past bij jouw ruimte en jouw ritme.",
    stat_1_n: "Eco",
    stat_1_t: "Bewuste middelen",
    stat_2_n: "Flex",
    stat_2_t: "Flexibel schema",
    stat_3_n: "Top",
    stat_3_t: "Net resultaat",
    about_note: "Professioneel • Betrouwbaar • Discreet",

    gallery_title: "Foto’s",
    gallery_subtitle: "Een kleine indruk van ons werk en onze diensten.",
    gallery_note:
      "Deze foto’s geven een realistische indruk van ons werk. Elke locatie is anders en wordt met zorg behandeld.",

    contact_title: "Contact",
    contact_sub: "Werkgebied: Maastricht & Limburg",
    quote_title: "Offerte aanvragen",
    form_name: "Naam",
    form_phone: "Telefoon",
    form_service: "Service",
    form_msg: "Bericht",
    form_send: "Versturen",
    form_note: "Na eerste keer ontvang je een bevestigingsmail van FormSubmit.",

    opt_home: "Woning schoonmaak",
    opt_office: "Kantoor schoonmaak",
    opt_deep: "Deep Cleaning",
    opt_vve: "VvE (entree & trappenhuis)",
    opt_windows: "Glazenwasser",
    opt_build: "Oplevering / Bouwschoonmaak",

    modal_pricing_title: "Tarieven — transparant & realistisch",
    modal_pricing_p1: "Onze tarieven zijn richtprijzen per uur. De definitieve prijs hangt af van:",
    modal_pricing_li1: "Grootte van de ruimte",
    modal_pricing_li2: "Staat van het pand (normaal / intensief / na verbouwing)",
    modal_pricing_li3: "Frequentie (wekelijks / 2-wekelijks / eenmalig)",
    modal_pricing_li4: "Bereikbaarheid & parkeer-/sleutelafspraken",
    modal_pricing_li5: "Extra wensen (ramen, apparatuur, detailwerk)",
    modal_pricing_p2:
      "Daarom bevestigen we altijd eerst een duidelijke offerte. Na akkoord plannen we de schoonmaak in.",
    modal_pricing_cta: "Offerte aanvragen"
  },
  en: {
    brand_tag: "Maastricht & Limburg",
    nav_services: "Services",
    nav_about: "About",
    nav_gallery: "Photos",
    nav_contact: "Contact",
    btn_prices: "Pricing",

    hero_pill: "Maastricht • Limburg • Eco-friendly",
    hero_title: "Professional cleaning, with respect for people & nature.",
    hero_subtitle:
      "For homes, offices and VvE buildings. Clear agreements, flexible planning and a neat finish.",
    hero_cta_quote: "Request a quote",
    hero_cta_whatsapp: "WhatsApp us",
    hero_check_1: "Reliable & discreet",
    hero_check_2: "Flexible scheduling",
    hero_check_3: "Eco products",
    hero_fastcontact: "Quick contact",
    hero_region_k: "Region:",
    hero_fastnote: "We usually respond the same day.",

    val1_t: "Eco conscious",
    val1_d: "We use eco-friendly products whenever possible.",
    val2_t: "Tailored",
    val2_d: "Weekly, bi-weekly or one-off.",
    val3_t: "Clear",
    val3_d: "Clear agreements and a tidy delivery.",

    services_title: "Services",
    services_subtitle: "For private homes, businesses and VvE buildings in Maastricht and Limburg.",
    svc_cta: "Request a quote →",

    svc_home_title: "Residential cleaning",
    svc_home_price: "From €25/hour",
    svc_home_text: "Fresh and tidy, with clear agreements. Ideal for weekly, bi-weekly or one-off.",

    svc_office_title: "Office cleaning",
    svc_office_price: "From €30/hour",
    svc_office_text: "A calm, clean workplace — scheduled flexibly around your opening hours.",
    svc_office_micro: "Visit frequency: 1×/wk • 2×/wk • 3×/wk+",

    svc_deep_title: "Deep cleaning",
    svc_deep_price: "From €45/hour (min. 3 hours)",
    svc_deep_text: "Intensive and thorough: grease, limescale, corners and built-up dirt — visible results.",

    svc_vve_title: "VvE (entrance & stairwell)",
    svc_vve_price: "From €30/hour",
    svc_vve_text: "For shared areas: entrance, stairs, railings and floors — fixed rounds and clear agreements.",
    svc_vve_micro: "Usually: weekly or bi-weekly",

    svc_windows_title: "Window cleaning",
    svc_windows_price: "From €35/hour",
    svc_windows_text: "Streak-free windows and frames — inside or outside, depending on access.",

    svc_build_title: "Move-out / post-build cleaning",
    svc_build_price: "From €30/hour",
    svc_build_text: "After renovation or moving: dust, residues and detail work — ready for handover.",

    services_prices_btn: "See pricing details",
    services_prices_note:
      "Rates are indicative. Final price is always confirmed via a quote based on location, size and requirements.",

    about_title: "About Crestamila",
    about_p1:
      "We are a cleaning service active in Maastricht and throughout Limburg. We stand for quality, reliability and clear agreements.",
    about_p2:
      "Whether it’s a home, office or a VvE building: we create a plan that fits your space and rhythm.",
    stat_1_n: "Eco",
    stat_1_t: "Conscious products",
    stat_2_n: "Flex",
    stat_2_t: "Flexible schedule",
    stat_3_n: "Top",
    stat_3_t: "Neat results",
    about_note: "Professional • Reliable • Discreet",

    gallery_title: "Photos",
    gallery_subtitle: "A small impression of our work and services.",
    gallery_note:
      "These photos give a realistic impression of our work. Every location is different and treated with care.",

    contact_title: "Contact",
    contact_sub: "Service area: Maastricht & Limburg",
    quote_title: "Request a quote",
    form_name: "Name",
    form_phone: "Phone",
    form_service: "Service",
    form_msg: "Message",
    form_send: "Send",
    form_note: "After the first time, you’ll receive a confirmation email from FormSubmit.",

    opt_home: "Residential cleaning",
    opt_office: "Office cleaning",
    opt_deep: "Deep cleaning",
    opt_vve: "VvE (entrance & stairwell)",
    opt_windows: "Window cleaning",
    opt_build: "Move-out / post-build cleaning",

    modal_pricing_title: "Pricing — transparent & realistic",
    modal_pricing_p1: "Our rates are hourly guidelines. The final price depends on:",
    modal_pricing_li1: "Size of the space",
    modal_pricing_li2: "Condition (standard / intensive / post-renovation)",
    modal_pricing_li3: "Frequency (weekly / bi-weekly / one-off)",
    modal_pricing_li4: "Access & parking/key arrangements",
    modal_pricing_li5: "Extras (windows, appliances, detail work)",
    modal_pricing_p2:
      "That’s why we always confirm a clear quote first. After approval, we schedule the cleaning.",
    modal_pricing_cta: "Request a quote"
  }
};
function applyI18n(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll(".lang__btn").forEach((b) => {
    b.classList.toggle("is-active", b.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = i18n[lang] && i18n[lang][key];
    if (value) el.textContent = value;
  });

  document.querySelectorAll("option[data-i18n]").forEach((opt) => {
    const key = opt.getAttribute("data-i18n");
    const value = i18n[lang] && i18n[lang][key];
    if (value) opt.textContent = value;
  });
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".lang__btn");
  if (!btn) return;
  applyI18n(btn.dataset.lang);
});

// default
applyI18n("nl");
document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("[data-modal-open]");
  const closeBtn = e.target.closest("[data-modal-close]");

  if (openBtn) {
    const modal = document.querySelector(openBtn.dataset.modalOpen);
    if (modal) modal.classList.add("is-open");
  }

  if (closeBtn) {
    closeBtn.closest(".modal")?.classList.remove("is-open");
  }
});