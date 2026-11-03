"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { t, type Lang } from "./translations";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const l = (key: keyof typeof t) => t[key][lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      {/* ===== NAVIGATION ===== */}
      <nav className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#">
              <Image
                src="/images/logo/tct-logo-horizontal.png"
                alt="TCT Oncology – Transplant & Cellular Therapy"
                width={160}
                height={40}
                className="h-14 w-auto"
                priority
              />
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-8 ml-10 text-sm font-medium text-zinc-300">
            <a href="#services" className="hover:text-teal transition-colors">{l("nav_services")}</a>
            <a href="#conditions" className="hover:text-teal transition-colors">{l("nav_conditions")}</a>
            <a href="#why-tct" className="hover:text-teal transition-colors">{l("nav_why")}</a>
            <a href="#team" className="hover:text-teal transition-colors">{l("nav_team")}</a>
            <a href="#physicians" className="hover:text-teal transition-colors">{l("nav_physicians")}</a>
            <a href="#faq" className="hover:text-teal transition-colors">{l("nav_faq")}</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#physicians" className="hidden md:inline-flex items-center justify-center rounded-lg border border-teal/50 px-4 py-2 text-sm font-medium text-teal hover:bg-teal/10 transition-colors">
              {l("nav_refer")}
            </a>
            <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-lg bg-lime px-5 py-2.5 text-sm font-semibold text-navy hover:bg-lime-dark transition-colors">
              {l("nav_appt")}
            </a>
            <div className="flex border border-zinc-600 rounded overflow-hidden ml-1">
              <button onClick={() => setLang("en")} className={`px-2.5 py-1.5 text-xs font-bold transition-colors ${lang === "en" ? "bg-teal text-navy" : "text-zinc-400 hover:text-white"}`}>EN</button>
              <button onClick={() => setLang("es")} className={`px-2.5 py-1.5 text-xs font-bold transition-colors ${lang === "es" ? "bg-teal text-navy" : "text-zinc-400 hover:text-white"}`}>ES</button>
            </div>
            {/* Mobile hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden ml-1 p-2 text-zinc-300 hover:text-white" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-navy border-t border-white/5 px-6 py-4 space-y-3">
            {([["#services","nav_services"],["#conditions","nav_conditions"],["#why-tct","nav_why"],["#team","nav_team"],["#physicians","nav_physicians"],["#faq","nav_faq"]] as const).map(([href,key]) => (
              <a key={key} href={href} onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-zinc-300 hover:text-teal transition-colors py-1">{l(key)}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block mt-3 text-center rounded-lg bg-lime px-5 py-3 text-sm font-semibold text-navy">{l("nav_appt")}</a>
            <a href="#physicians" onClick={() => setMenuOpen(false)} className="block text-center rounded-lg border border-teal/50 px-5 py-3 text-sm font-medium text-teal">{l("nav_refer")}</a>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full border border-teal/10" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full border border-teal/5" />
        <div className="absolute top-40 right-40 w-4 h-4 rounded-full bg-teal/20" />
        <div className="absolute bottom-32 right-24 w-3 h-3 rounded-full bg-lime/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-16 lg:py-20">
          <div className="max-w-4xl">
            <p className="text-teal font-medium text-xs tracking-[0.2em] uppercase mb-6">{l("hero_label")}</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight">
              {l("hero_h1_pre")} <span className="font-serif italic text-teal">&amp;</span> {l("hero_h1_post")}
            </h1>
            <div className="w-16 h-1 bg-teal mt-8 mb-6" />
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">{l("hero_sub")}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-lime px-8 py-4 text-base font-bold text-navy hover:bg-lime-dark transition-colors">{l("hero_cta_appt")}</a>
              <a href="#physicians" className="inline-flex items-center justify-center rounded-lg border-2 border-teal/50 px-8 py-4 text-base font-semibold text-teal hover:bg-teal/10 transition-colors">{l("hero_cta_refer")}</a>
              <a href="tel:+17872330676" className="inline-flex items-center justify-center rounded-lg border-2 border-zinc-600 px-8 py-4 text-base font-semibold text-zinc-300 hover:bg-white/5 transition-colors">{l("hero_cta_call")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CREDIBILITY STRIP ===== */}
      <section className="bg-navy-light border-t border-white/5 border-b border-b-white/5">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-center">
            {(["cred_1","cred_2","cred_3","cred_4"] as const).map((key) => (
              <p key={key} className="text-sm text-zinc-400 font-medium">{l(key)}</p>
            ))}
            <span className="inline-flex items-center rounded-full bg-lime/15 border border-lime/30 px-4 py-1.5 text-xs font-bold text-lime tracking-wider uppercase">{l("cred_fact")}</span>
          </div>
        </div>
      </section>

      {/* ===== AT A GLANCE (STATS) ===== */}
      <section className="bg-navy-mid border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-teal font-medium text-xs tracking-[0.2em] uppercase text-center mb-10">{l("stats_label")}</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {([["stat_1_value","stat_1_label"],["stat_2_value","stat_2_label"],["stat_3_value","stat_3_label"],["stat_4_value","stat_4_label"]] as const).map(([vk,lk]) => (
              <div key={vk} className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-bold text-lime">{l(vk)}</p>
                <p className="mt-3 text-sm text-zinc-400 leading-snug max-w-[16rem] mx-auto">{l(lk)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY TCT ===== */}
      <section id="why-tct" className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-teal font-medium text-xs tracking-[0.2em] uppercase mb-4">{l("why_label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">{l("why_title_pre")} <span className="font-serif italic text-teal">&amp;</span> {l("why_title_post")}</h2>
            <div className="w-12 h-1 bg-teal mt-6 mb-6" />
            <p className="text-lg text-zinc-400 leading-relaxed">{l("why_intro")}</p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {([["why_1_title","why_1_desc"],["why_2_title","why_2_desc"],["why_3_title","why_3_desc"],["why_4_title","why_4_desc"],["why_5_title","why_5_desc"],["why_6_title","why_6_desc"]] as const).map(([tk,dk]) => (
              <div key={tk} className="bg-navy-light rounded-xl p-7 border border-white/5 hover:border-teal/20 transition-colors">
                <div className="w-8 h-1 bg-teal mb-5" />
                <h3 className="text-white font-semibold text-lg">{l(tk)}</h3>
                <p className="mt-3 text-zinc-400 leading-relaxed text-sm">{l(dk)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="bg-gray-section py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-teal-dark font-medium text-xs tracking-[0.2em] uppercase mb-4">{l("svc_label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">{l("svc_title")}</h2>
            <div className="w-12 h-1 bg-teal mt-6 mb-6" />
            <p className="text-lg text-zinc-600 leading-relaxed">{l("svc_intro")}</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {([["01","svc_1_title","svc_1_desc"],["02","svc_2_title","svc_2_desc"],["03","svc_3_title","svc_3_desc"],["04","svc_4_title","svc_4_desc"]] as const).map(([num,tk,dk]) => (
              <div key={num} className="bg-navy rounded-xl p-8 border border-navy-light hover:border-teal/20 transition-colors">
                <span className="text-teal text-xs font-bold tracking-[0.2em] uppercase">{lang === "en" ? "Treatment" : "Tratamiento"} {num}</span>
                <h3 className="mt-3 text-xl font-serif font-semibold text-white">{l(tk)}</h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">{l(dk)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CAR-T SPOTLIGHT ===== */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-lime font-medium text-xs tracking-[0.2em] uppercase mb-4">{l("cart_label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">{l("cart_title")}</h2>
            <div className="w-12 h-1 bg-teal mt-6 mb-6" />
            <p className="text-lg text-zinc-400 leading-relaxed">{l("cart_intro")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {([["cart_s1_step","cart_s1_sub","cart_s1_title","cart_s1_desc"],["cart_s2_step","cart_s2_sub","cart_s2_title","cart_s2_desc"],["cart_s3_step","cart_s3_sub","cart_s3_title","cart_s3_desc"]] as const).map(([sk,subk,tk,dk]) => (
              <div key={sk} className="border-l-2 border-teal pl-6">
                <span className="text-teal text-xs font-bold tracking-[0.2em] uppercase">{l(sk)} &middot; {l(subk)}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{l(tk)}</h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">{l(dk)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONDITIONS ===== */}
      <section id="conditions" className="bg-gray-section py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-teal-dark font-medium text-xs tracking-[0.2em] uppercase mb-4">{l("cond_label")}</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">{l("cond_title_pre")} <span className="font-serif italic text-teal">&amp;</span> {l("cond_title_post")}</h2>
              <div className="w-12 h-1 bg-teal mt-6 mb-8" />
              <div className="grid sm:grid-cols-2 gap-3">
                {(["cond_1","cond_2","cond_3","cond_4","cond_5","cond_6","cond_7"] as const).map((key) => (
                  <div key={key} className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-zinc-200">
                    <div className="w-2 h-2 rounded-full bg-teal flex-shrink-0" />
                    <p className="text-navy font-medium text-sm">{l(key)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-navy rounded-xl p-8">
              <h3 className="font-serif text-xl font-semibold text-white">{l("cond_cta_title")}</h3>
              <p className="mt-4 text-zinc-400 leading-relaxed text-sm">{l("cond_cta_desc")}</p>
              <div className="mt-6 flex flex-col gap-3">
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-lime px-6 py-3 text-sm font-bold text-navy hover:bg-lime-dark transition-colors">{l("cond_cta_consult")}</a>
                <a href="#physicians" className="inline-flex items-center justify-center rounded-lg border border-teal/40 px-6 py-3 text-sm font-semibold text-teal hover:bg-teal/10 transition-colors">{l("nav_refer")}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section id="team" className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-teal font-medium text-xs tracking-[0.2em] uppercase mb-4">{l("team_label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">{l("team_title")}</h2>
            <div className="w-12 h-1 bg-teal mt-6 mb-6" />
            <p className="text-lg text-zinc-400 leading-relaxed">{l("team_intro")}</p>
          </div>
          <div className="mt-12 rounded-2xl overflow-hidden border-2 border-teal/20">
            <Image src="/images/team/group.jpeg" alt="TCT Oncology physician team at the transplant program in San Juan, Puerto Rico" width={2400} height={1610} sizes="(min-width: 1280px) 1232px, 100vw" className="w-full h-64 md:h-96 object-cover object-top" />
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { name: "Dr. Alexis M. Cruz-Chac\u00f3n", roleKey: "doc_cruz_role" as const, photo: "/images/team/cruz.jpeg", bioKey: "doc_cruz_bio" as const },
              { name: "Dr. Cristian Rodr\u00edguez Arocho", roleKey: "doc_rodriguez_role" as const, photo: "/images/team/rodriguez.jpeg", bioKey: "doc_rodriguez_bio" as const },
              { name: "Dr. Carlos Bachier Cintr\u00f3n", roleKey: "doc_bachier_role" as const, photo: "/images/team/bachier.jpeg", bioKey: "doc_bachier_bio" as const },
              { name: "Dra. Mariola V\u00e1zquez Mart\u00ednez", roleKey: "doc_mariola_role" as const, photo: "/images/team/mariola.jpeg", bioKey: "doc_mariola_bio" as const },
              { name: "Dra. Karla J. Feliciano-Salv\u00e1", roleKey: "doc_karla_role" as const, photo: "/images/team/karla.jpeg", bioKey: "doc_karla_bio" as const },
              { name: "Dra. Dominic S\u00e1nchez Paredes", roleKey: "doc_sanchez_role" as const, photo: "/images/team/sanchez.jpeg", bioKey: "doc_sanchez_bio" as const },
            ].map((doc) => (
              <div key={doc.name} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-navy-light rounded-xl overflow-hidden border border-white/5 hover:border-teal/20 transition-colors">
                <div className="relative h-80 flex items-center justify-center bg-navy-mid">
                  <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-teal/30">
                    <Image src={doc.photo} alt={doc.name} fill className="object-cover object-top" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-lg font-semibold text-white">{doc.name}</h3>
                  <p className="mt-1 text-teal text-sm font-medium">{l(doc.roleKey)}</p>
                  <p className="mt-3 text-zinc-400 text-sm leading-relaxed">{l(doc.bioKey)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <h3 className="font-serif text-xl font-semibold text-white mb-8">{l("team_support_title")}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {([["support_1_title","support_1_desc"],["support_2_title","support_2_desc"],["support_3_title","support_3_desc"],["support_4_title","support_4_desc"],["support_5_title","support_5_desc"],["support_6_title","support_6_desc"]] as const).map(([tk,dk]) => (
                <div key={tk} className="bg-white/5 rounded-lg p-5 border border-white/5">
                  <h4 className="font-semibold text-white text-sm">{l(tk)}</h4>
                  <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{l(dk)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHYSICIANS ===== */}
      <section id="physicians" className="bg-gray-section py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-teal-dark font-medium text-xs tracking-[0.2em] uppercase mb-4">{l("phys_label")}</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">{l("phys_title")}</h2>
              <div className="w-12 h-1 bg-teal mt-6 mb-6" />
              <p className="text-lg text-zinc-600 leading-relaxed">{l("phys_intro")}</p>
              <p className="mt-4 text-zinc-600 leading-relaxed">{l("phys_intro2")}</p>
              <h3 className="mt-8 font-serif text-lg font-semibold text-navy mb-4">{l("phys_indications_title")}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(["ind_1","ind_2","ind_3","ind_4","ind_5","ind_6","ind_7","ind_8","ind_9","ind_10"] as const).map((key) => (
                  <p key={key} className="text-sm text-zinc-600 flex items-start gap-2">
                    <span className="text-teal mt-0.5 flex-shrink-0">&#8226;</span>{l(key)}
                  </p>
                ))}
              </div>
              <div className="mt-8">
                <a href="mailto:referidos@tctoncology.com" className="inline-flex items-center justify-center rounded-lg bg-navy px-8 py-4 text-base font-semibold text-white hover:bg-navy-light transition-colors">{l("phys_refer_btn")}</a>
              </div>
            </div>
            <div className="bg-navy rounded-xl p-8">
              <h3 className="font-serif text-lg font-semibold text-white mb-6">{l("phys_expect_title")}</h3>
              <div className="space-y-6">
                {(["phys_step_1","phys_step_2","phys_step_3","phys_step_4","phys_step_5"] as const).map((key, i) => (
                  <div key={key} className="flex gap-4">
                    <div className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-teal flex items-center justify-center text-teal text-sm font-bold">{i + 1}</div>
                    <p className="text-zinc-300 pt-1.5">{l(key)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PATIENT JOURNEY ===== */}
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-teal font-medium text-xs tracking-[0.2em] uppercase mb-4">{l("journey_label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">{l("journey_title")}</h2>
            <div className="w-12 h-1 bg-teal mt-6 mb-6" />
            <p className="text-lg text-zinc-400 leading-relaxed">{l("journey_intro")}</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {([["01","journey_1_title","journey_1_desc"],["02","journey_2_title","journey_2_desc"],["03","journey_3_title","journey_3_desc"],["04","journey_4_title","journey_4_desc"]] as const).map(([step,tk,dk]) => (
              <div key={step} className="relative bg-navy-light rounded-xl p-7 border border-white/5">
                <span className="text-4xl font-bold text-teal/15 font-serif">{step}</span>
                <h3 className="mt-2 text-lg font-semibold text-white">{l(tk)}</h3>
                <p className="mt-3 text-zinc-400 leading-relaxed text-sm">{l(dk)}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-teal/10 rounded-xl p-8 border border-teal/20">
            <p className="text-zinc-300 leading-relaxed">
              <strong className="text-white">{l("journey_callout_bold")}</strong> {l("journey_callout")}
            </p>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-gray-section py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-teal-dark font-medium text-xs tracking-[0.2em] uppercase mb-4">{l("faq_label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy">{l("faq_title")}</h2>
            <div className="w-12 h-1 bg-teal mt-6 mb-6" />
          </div>
          <div className="mt-8 max-w-3xl space-y-0">
            {([["faq_1_q","faq_1_a"],["faq_2_q","faq_2_a"],["faq_3_q","faq_3_a"],["faq_4_q","faq_4_a"],["faq_5_q","faq_5_a"],["faq_6_q","faq_6_a"],["faq_7_q","faq_7_a"]] as const).map(([qk,ak]) => (
              <details key={qk} className="group border-b border-zinc-200">
                <summary className="flex items-center justify-between cursor-pointer py-6 text-lg font-semibold text-navy hover:text-teal transition-colors list-none">
                  {l(qk)}
                  <span className="flex-shrink-0 ml-4 w-8 h-8 rounded-full border-2 border-zinc-300 group-open:border-teal flex items-center justify-center text-zinc-400 group-open:text-teal transition-colors">
                    <svg className="w-4 h-4 group-open:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  </span>
                </summary>
                <p className="pb-6 text-zinc-600 leading-relaxed pr-12">{l(ak)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PODCAST ===== */}
      <section className="bg-navy-light py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-teal/15 border border-teal/20 flex items-center justify-center text-3xl">🎙</div>
            <div>
              <p className="text-teal font-medium text-xs tracking-[0.2em] uppercase mb-2">{l("podcast_label")}</p>
              <h2 className="font-serif text-2xl font-bold text-white">{l("podcast_title")}</h2>
              <p className="mt-3 text-zinc-400 leading-relaxed max-w-2xl">{l("podcast_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="contact" className="bg-navy py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 rounded-full border border-teal/10" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border border-lime/10" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">{l("cta_title")}</h2>
          <div className="w-12 h-1 bg-teal mt-6 mb-6 mx-auto" />
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">{l("cta_desc")}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17872330676" className="inline-flex items-center justify-center rounded-lg bg-lime px-8 py-4 text-base font-bold text-navy hover:bg-lime-dark transition-colors">{l("cta_call")}</a>
            <a href="mailto:citas@tctoncology.com" className="inline-flex items-center justify-center rounded-lg border-2 border-teal/50 px-8 py-4 text-base font-semibold text-teal hover:bg-teal/10 transition-colors">{l("cta_email")}</a>
            <a href="mailto:referidos@tctoncology.com" className="inline-flex items-center justify-center rounded-lg border-2 border-zinc-600 px-8 py-4 text-base font-semibold text-zinc-300 hover:bg-white/5 transition-colors">{l("nav_refer")}</a>
          </div>
          <p className="mt-8 text-sm text-zinc-500">{l("cta_hours")}</p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-navy-light border-t border-white/5 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image src="/images/logo/tct-logo-horizontal.png" alt="TCT Oncology" width={140} height={35} className="h-8 w-auto" />
              <p className="mt-3 text-sm text-zinc-500">San Juan, Puerto Rico</p>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm tracking-wider uppercase">{l("footer_links_title")}</h4>
              <div className="mt-3 space-y-2 text-sm text-zinc-400">
                <a href="#services" className="block hover:text-teal transition-colors">{l("footer_services")}</a>
                <a href="#conditions" className="block hover:text-teal transition-colors">{l("footer_conditions")}</a>
                <a href="#team" className="block hover:text-teal transition-colors">{l("footer_team")}</a>
                <a href="#physicians" className="block hover:text-teal transition-colors">{l("footer_refer")}</a>
                <a href="#faq" className="block hover:text-teal transition-colors">{l("footer_faq")}</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm tracking-wider uppercase">{l("footer_contact")}</h4>
              <div className="mt-3 space-y-2 text-sm text-zinc-400">
                <p>(787) 233-0676</p>
                <p>citas@tctoncology.com</p>
                <p>referidos@tctoncology.com</p>
                <p>San Juan, Puerto Rico</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} {l("footer_copyright")}
          </div>
        </div>
      </footer>
    </>
  );
}
