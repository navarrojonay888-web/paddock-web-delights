import { createFileRoute } from "@tanstack/react-router";
import {
  Star,
  MapPin,
  Phone,
  Clock,
  Euro,
  Navigation,
  Beer,
  UtensilsCrossed,
  Flame,
} from "lucide-react";

import heroImg from "@/assets/hero-bodega.jpg";
import hamburguesaImg from "@/assets/hamburguesa.jpg";
import tapasImg from "@/assets/tapas.jpg";
import papasImg from "@/assets/papas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "La Bodegueta del Paddock — Bar restaurante en Vila-real",
      },
      {
        name: "description",
        content:
          "Bar restaurante en Vila-real. Hamburguesas artesanas (especialidad las de potro), tapas y buen ambiente. 4,8★ en Google. Carrer Josep Ramón Batalla, 15. Reserva: 643 86 99 82.",
      },
      { property: "og:title", content: "La Bodegueta del Paddock — Bar restaurante en Vila-real" },
      {
        property: "og:description",
        content:
          "Hamburguesas artesanas, tapas y buen rollo en Vila-real. 4,8★ en Google. Carrer Josep Ramón Batalla, 15. Tel: 643 86 99 82.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=La+Bodegueta+del+Paddock%2C+Carrer+Josep+Ram%C3%B3n+Batalla+15%2C+12540+Vila-real";
const MAPS_EMBED =
  "https://www.google.com/maps?q=La+Bodegueta+del+Paddock,+Carrer+Josep+Ram%C3%B3n+Batalla+15,+12540+Vila-real,+Castell%C3%B3&output=embed";
const PHONE = "643 86 99 82";
const PHONE_HREF = "tel:+34643869982";

const reviews = [
  {
    author: "Roxana Martínez Rozo",
    meta: "Hace 5 meses",
    text: "Las hamburguesas son deliciosas, especialidad las de potro.",
    stars: 5,
  },
  {
    author: "Francisco Minaya",
    meta: "Hace 3 meses",
    text: "Nos ha encantado, repetiremos. Kevin un crack y la compi igual.",
    stars: 5,
  },
  {
    author: "Nando Cabrera Balaguer",
    meta: "Hace 15 horas",
    text: "Muy buen local…",
    stars: 5,
  },
];

const highlights = [
  {
    img: hamburguesaImg,
    alt: "Hamburguesa artesana de potro con cebolla caramelizada",
    icon: Flame,
    title: "Hamburguesas artesanas",
    text: "La especialidad de la casa: las de potro, jugosas y hechas al momento.",
  },
  {
    img: tapasImg,
    alt: "Mesa con variedad de tapas españolas",
    icon: UtensilsCrossed,
    title: "Tapas",
    text: "Para compartir o para picar algo en la barra, siempre recién hechas.",
  },
  {
    img: papasImg,
    alt: "Plato de papas fritas con alioli",
    icon: Beer,
    title: "Papas fritas",
    text: "Crujientes y doradas, la compañera perfecta de cualquier plato.",
  },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-primary ${className}`} aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Cabecera ─────────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            La Bodegueta <span className="text-primary">del Paddock</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#carta" className="transition-colors hover:text-foreground">Carta</a>
            <a href="#resenas" className="transition-colors hover:text-foreground">Reseñas</a>
            <a href="#informacion" className="transition-colors hover:text-foreground">Información</a>
            <a href="#como-llegar" className="transition-colors hover:text-foreground">Cómo llegar</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{PHONE}</span>
            <span className="sm:hidden">Llamar</span>
          </a>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Interior de La Bodegueta del Paddock, barra de madera con vinos y tapas"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-40 sm:px-6">
          <div className="inline-flex flex-wrap items-center gap-3 rounded-full border border-border bg-card/70 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              4,8
              <Stars className="[&>svg]:h-3.5 [&>svg]:w-3.5" />
            </span>
            <span className="text-muted-foreground">12 reseñas en Google</span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Euro className="h-3.5 w-3.5" aria-hidden />
              10–20 €
            </span>
            <span className="text-border">·</span>
            <span className="inline-flex items-center gap-1.5 text-primary">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              Abierto ahora · cierra a las 23:00
            </span>
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Bar restaurante de barrio,
            <br />
            sabor <span className="italic text-primary">de casa</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Hamburguesas artesanas, tapas y buen ambiente en el corazón de Vila-real.
            Ven a cenar, picar algo o tomar una copa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#carta"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver la carta
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-input bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-secondary"
            >
              <Navigation className="h-4 w-4" aria-hidden />
              Cómo llegar
            </a>
          </div>
        </div>
      </section>

      {/* ── Especialidades ───────────────────────────────────── */}
      <section id="carta" className="grain scroll-mt-20 border-t border-border py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Nuestra carta</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Los imprescindibles de La Bodegueta
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Cocina de mercado y barra de toda la vida. Menú de 10–20 € por persona.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary">
                    <item.icon className="h-4 w-4" aria-hidden />
                    <span className="text-xs font-semibold uppercase tracking-widest">Destacado</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-6">
            <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm text-muted-foreground">
              Encuéntranos en <span className="font-medium text-foreground">Carrer Josep Ramón Batalla, 15, 12540 Vila-real (Castelló)</span>
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="ml-auto rounded-full border border-input px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* ── Reseñas ──────────────────────────────────────────── */}
      <section id="resenas" className="scroll-mt-20 border-t border-border bg-card/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Reseñas</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Lo que dicen nuestros clientes
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-display text-6xl font-semibold text-primary">4,8</span>
              <div>
                <Stars />
                <p className="mt-1 text-sm text-muted-foreground">12 reseñas en Google</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.author} className="rounded-2xl border border-border bg-card p-6">
                <Stars />
                <blockquote className="mt-4 text-sm leading-relaxed">“{r.text}”</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold">{r.author}</p>
                  <p className="text-xs text-muted-foreground">{r.meta}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Leer todas las reseñas en Google
            </a>
          </div>
        </div>
      </section>

      {/* ── Información + Cómo llegar ────────────────────────── */}
      <section id="informacion" className="scroll-mt-20 border-t border-border py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Información</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Todo lo que necesitas saber
            </h2>
            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="font-medium">Dirección</p>
                  <p className="text-sm text-muted-foreground">
                    Carrer Josep Ramón Batalla, 15, 12540 Vila-real, Castelló
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="font-medium">Horario</p>
                  <p className="text-sm text-muted-foreground">
                    Abierto · cierre a las 23:00
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <a href={PHONE_HREF} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {PHONE}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Euro className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div>
                  <p className="font-medium">Precio medio</p>
                  <p className="text-sm text-muted-foreground">10–20 € por persona</p>
                </div>
              </li>
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Reservar mesa
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-input px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Navigation className="h-4 w-4" aria-hidden />
                Abrir en Maps
              </a>
            </div>
          </div>
          <div id="como-llegar" className="scroll-mt-24">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Mapa de La Bodegueta del Paddock en Vila-real"
                src={MAPS_EMBED}
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0 sm:h-[440px]"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Plus code: WVPW+43 Vila-real
            </p>
          </div>
        </div>
      </section>

      {/* ── Pie ──────────────────────────────────────────────── */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
          <p className="font-display text-base font-semibold text-foreground">
            La Bodegueta <span className="text-primary">del Paddock</span>
          </p>
          <p>Vila-real, Castelló · {PHONE}</p>
          <p>© {new Date().getFullYear()} La Bodegueta del Paddock</p>
        </div>
      </footer>
    </div>
  );
}
