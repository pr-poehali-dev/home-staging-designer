import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/05024956-ac3a-440b-9173-42c63fbdf7aa/files/89e0db6c-e09f-4293-b20d-648b6fdbee9f.jpg";
const BEDROOM_IMAGE = "https://cdn.poehali.dev/projects/05024956-ac3a-440b-9173-42c63fbdf7aa/files/53944178-53b9-44cb-9e06-2e47771bb571.jpg";

const services = [
  {
    icon: "LayoutDashboard",
    title: "Планировка пространства",
    desc: "Продуманная расстановка мебели с учётом вашего образа жизни и размеров комнаты. Вы получите понятный план с размерами.",
    price: "от 8 000 ₽",
    days: "3–5 дней",
    featured: false,
  },
  {
    icon: "Palette",
    title: "Подбор цветов и материалов",
    desc: "Гармоничная палитра, которая создаёт нужное настроение. Никакого угадывания — только точный расчёт.",
    price: "от 6 000 ₽",
    days: "2–3 дня",
    featured: false,
  },
  {
    icon: "Lightbulb",
    title: "Сценарии освещения",
    desc: "Тёплый уют вечером, бодрое утро, рабочая зона — правильный свет меняет восприятие любого интерьера.",
    price: "от 5 000 ₽",
    days: "2–3 дня",
    featured: false,
  },
  {
    icon: "ShoppingBag",
    title: "Готовый список покупок",
    desc: "Ссылки на конкретные товары в вашем бюджете. Вам остаётся только оформить заказ — без часов поиска.",
    price: "от 4 000 ₽",
    days: "1–2 дня",
    featured: false,
  },
  {
    icon: "Sparkles",
    title: "Комплексный дизайн",
    desc: "Полный пакет: планировка + цвета + свет + список покупок. Всё под ключ — ваш интерьер через 2 недели.",
    price: "от 22 000 ₽",
    days: "10–14 дней",
    featured: true,
  },
];

function useInView(ref: React.RefObject<Element>, threshold = 0.12) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return inView;
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--cream)", color: "var(--bark)" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(245,239,228,0.88)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(185,155,120,0.2)" }}>
        <span className="font-display text-xl font-semibold tracking-wide" style={{ color: "var(--terracotta)" }}>
          Уютный интерьер
        </span>
        <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium" style={{ color: "var(--bark)" }}>
          <a href="#services" className="hover:text-[var(--terracotta)] transition-colors">Услуги</a>
          <a href="#contacts" className="hover:text-[var(--terracotta)] transition-colors">Контакты</a>
          <a
            href="#contacts"
            className="px-5 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
            style={{ background: "var(--terracotta)", color: "var(--cream)" }}
          >
            Оставить заявку
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Уютный интерьер"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(245,239,228,0.93) 38%, rgba(245,239,228,0.55) 70%, transparent 100%)" }} />
        </div>

        <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-3xl">
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <span className="inline-block font-body text-sm font-medium tracking-widest uppercase mb-5"
              style={{ color: "var(--terracotta)", letterSpacing: "0.15em" }}>
              Дизайн-хоумстейджинг
            </span>
          </div>
          <h1
            className="font-display text-5xl md:text-7xl leading-tight mb-6 opacity-0 animate-fade-up"
            style={{ color: "var(--bark)", fontWeight: 400, animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Уютный интерьер<br />
            <em style={{ color: "var(--terracotta)", fontStyle: "italic" }}>за 1–2 недели</em>
          </h1>
          <p
            className="font-body text-lg md:text-xl leading-relaxed mb-10 opacity-0 animate-fade-up"
            style={{ color: "var(--bark)", maxWidth: "520px", animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Планировка, цвета, уютный свет и готовый список покупок. Без долгих ожиданий — только результат, который хочется домой.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <a
              href="#contacts"
              className="px-8 py-4 rounded-full font-body font-medium text-base transition-all hover:opacity-90 hover:scale-105"
              style={{ background: "var(--terracotta)", color: "var(--cream)" }}
            >
              Хочу уютный интерьер
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full font-body font-medium text-base transition-all hover:opacity-80"
              style={{ border: "1.5px solid var(--terracotta)", color: "var(--terracotta)", background: "transparent" }}
            >
              Посмотреть услуги
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-14 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            {[
              { num: "50+", label: "проектов" },
              { num: "1–2", label: "недели на всё" },
              { num: "100%", label: "онлайн" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-semibold" style={{ color: "var(--terracotta)" }}>{s.num}</div>
                <div className="font-body text-sm mt-0.5" style={{ color: "var(--bark)", opacity: 0.65 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-0 animate-fade-in" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
          <span className="font-body text-xs tracking-widest uppercase" style={{ color: "var(--terracotta)", opacity: 0.6 }}>листайте</span>
          <div className="w-px h-10 mt-1" style={{ background: "linear-gradient(to bottom, var(--terracotta), transparent)" }} />
        </div>
      </section>

      {/* INTRO STRIP */}
      <AnimatedSection>
        <div className="py-10 px-6 md:px-16" style={{ background: "var(--terracotta)" }}>
          <p className="font-display text-2xl md:text-3xl text-center font-light italic" style={{ color: "var(--cream)" }}>
            «Мечтаете об уютном интерьере, но не хотите ждать месяцы?»
          </p>
        </div>
      </AnimatedSection>

      {/* HOMESTAGING ABOUT */}
      <section className="py-24 px-6 md:px-16 lg:px-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="mb-14">
              <span className="font-body text-sm tracking-widest uppercase" style={{ color: "var(--terracotta)", opacity: 0.8 }}>
                о подходе
              </span>
              <h2 className="font-display text-5xl md:text-6xl mt-3 font-light" style={{ color: "var(--bark)" }}>
                Хоумстейджинг:<br />
                <em style={{ color: "var(--terracotta)", fontStyle: "italic" }}>уют без ремонта</em>
              </h2>
              <div className="mt-4 w-16 h-0.5 rounded" style={{ background: "var(--terracotta)" }} />
              <p className="font-body text-lg leading-relaxed mt-6 max-w-xl" style={{ color: "var(--bark)", opacity: 0.8 }}>
                Преображаю интерьеры без пыли и больших вложений. Помогаю не только продать или сдать недвижимость, но и просто сделать дом гармоничнее.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Для кого */}
            <AnimatedSection>
              <div className="rounded-2xl p-8 h-full" style={{ background: "var(--linen)", border: "1.5px solid var(--sand)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--cream)" }}>
                    <Icon name="Users" size={20} style={{ color: "var(--terracotta)" }} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold" style={{ color: "var(--bark)" }}>Для кого</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Владельцы квартир и отдельных комнат — спальня, детская, кухня",
                    "Те, кто хочет правильно расставить мебель и добавить уюта",
                    "Коммерческие помещения — офисы, салоны, кафе",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "var(--terracotta)" }}>
                        <Icon name="Check" size={11} style={{ color: "var(--cream)" }} />
                      </div>
                      <p className="font-body text-sm leading-snug" style={{ color: "var(--bark)", opacity: 0.85 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Пакет */}
            <AnimatedSection>
              <div className="rounded-2xl p-8" style={{ background: "var(--terracotta)" }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-semibold" style={{ color: "var(--cream)" }}>
                    Что входит
                  </h3>
                  <div className="text-right">
                    <div className="font-display text-3xl font-semibold" style={{ color: "var(--cream)" }}>от 17 000 ₽</div>
                    <div className="font-body text-xs mt-0.5" style={{ color: "rgba(245,239,228,0.7)" }}>за одно помещение</div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  {[
                    "Планировочное решение",
                    "Схема розеток и выключателей (по запросу)",
                    "Цветовая гамма + коллаж",
                    "Итоговая визуализация",
                    "Подбор мебели и материалов под ваш бюджет",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="font-body text-base flex-shrink-0 mt-0.5" style={{ color: "rgba(245,239,228,0.7)" }}>→</span>
                      <p className="font-body text-sm leading-snug" style={{ color: "var(--cream)", opacity: 0.9 }}>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-5 flex items-center gap-3" style={{ borderTop: "1px solid rgba(245,239,228,0.25)" }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(245,239,228,0.2)" }}>
                    <Icon name="Clock" size={15} style={{ color: "var(--cream)" }} />
                  </div>
                  <span className="font-body text-sm" style={{ color: "rgba(245,239,228,0.85)" }}>
                    Срок: <strong style={{ color: "var(--cream)" }}>1–2 недели</strong>
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-16 lg:px-24" style={{ background: "var(--linen)" }}>
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="font-body text-sm tracking-widest uppercase" style={{ color: "var(--terracotta)", opacity: 0.8 }}>
              что я делаю
            </span>
            <h2 className="font-display text-5xl md:text-6xl mt-3 font-light" style={{ color: "var(--bark)" }}>
              Услуги
            </h2>
            <div className="mt-4 mx-auto w-16 h-0.5 rounded" style={{ background: "var(--terracotta)" }} />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s) => (
            <AnimatedSection key={s.title}>
              <div
                className="group rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: s.featured ? "var(--terracotta)" : "var(--cream)",
                  border: s.featured ? "none" : "1.5px solid var(--sand)",
                  boxShadow: s.featured ? "0 8px 32px rgba(155,94,63,0.2)" : "0 2px 12px rgba(92,61,42,0.06)",
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: s.featured ? "rgba(245,239,228,0.2)" : "var(--linen)" }}>
                  <Icon name={s.icon} size={22} style={{ color: s.featured ? "var(--cream)" : "var(--terracotta)" }} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3"
                  style={{ color: s.featured ? "var(--cream)" : "var(--bark)" }}>
                  {s.title}
                </h3>
                <p className="font-body text-sm leading-relaxed flex-1 mb-6"
                  style={{ color: s.featured ? "rgba(245,239,228,0.85)" : "rgba(92,61,42,0.75)" }}>
                  {s.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-display text-xl font-semibold"
                    style={{ color: s.featured ? "var(--cream)" : "var(--terracotta)" }}>
                    {s.price}
                  </span>
                  <span className="font-body text-xs px-3 py-1.5 rounded-full flex items-center gap-1"
                    style={{
                      background: s.featured ? "rgba(245,239,228,0.2)" : "var(--linen)",
                      color: s.featured ? "var(--cream)" : "var(--bark)",
                    }}>
                    <Icon name="Clock" size={12} />
                    {s.days}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* WHY ME */}
      <section className="py-20 px-6 md:px-16 lg:px-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <AnimatedSection>
            <div className="relative">
              <img
                src={BEDROOM_IMAGE}
                alt="Уютная спальня"
                className="w-full rounded-2xl object-cover"
                style={{ height: "420px", boxShadow: "0 16px 48px rgba(92,61,42,0.15)" }}
              />
              <div className="absolute -bottom-5 -right-5 rounded-xl px-5 py-4 shadow-lg"
                style={{ background: "var(--terracotta)", color: "var(--cream)" }}>
                <div className="font-display text-3xl font-semibold">14</div>
                <div className="font-body text-xs mt-0.5" style={{ opacity: 0.85 }}>дней максимум</div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <span className="font-body text-sm tracking-widest uppercase" style={{ color: "var(--terracotta)", opacity: 0.8 }}>
              почему со мной
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 mb-6 font-light" style={{ color: "var(--bark)" }}>
              Без лишних месяцев<br />и бесконечных правок
            </h2>
            <div className="space-y-5">
              {[
                { icon: "Zap", text: "Быстрый старт — начинаем в течение 2 дней после оплаты" },
                { icon: "MessageCircle", text: "Работаем онлайн — встречи в Zoom или переписка, как вам удобно" },
                { icon: "CheckCircle", text: "Чёткий результат — не концепция, а конкретный план и список покупок" },
                { icon: "Heart", text: "Интерьер для жизни — не для фото, а для вас и вашей семьи" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "var(--linen)" }}>
                    <Icon name={item.icon} size={18} style={{ color: "var(--terracotta)" }} />
                  </div>
                  <p className="font-body text-base leading-snug pt-2" style={{ color: "var(--bark)", opacity: 0.85 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 md:px-16 lg:px-24" style={{ background: "var(--linen)" }}>
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="font-body text-sm tracking-widest uppercase" style={{ color: "var(--terracotta)", opacity: 0.8 }}>
              напишите мне
            </span>
            <h2 className="font-display text-5xl md:text-6xl mt-3 font-light" style={{ color: "var(--bark)" }}>
              Контакты
            </h2>
            <div className="mt-4 mx-auto w-16 h-0.5 rounded" style={{ background: "var(--terracotta)" }} />
            <p className="font-body mt-5 text-base" style={{ color: "var(--bark)", opacity: 0.7, maxWidth: "440px", margin: "20px auto 0" }}>
              Расскажите о вашем пространстве — и я свяжусь с вами в течение нескольких часов
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <div className="rounded-2xl p-7" style={{ background: "var(--cream)", border: "1.5px solid var(--sand)" }}>
              <h3 className="font-display text-2xl mb-5" style={{ color: "var(--bark)" }}>Как связаться</h3>
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (000) 000-00-00" },
                { icon: "Mail", label: "Email", value: "hello@example.com" },
                { icon: "MessageSquare", label: "Telegram", value: "@username" },
                { icon: "Clock", label: "Время работы", value: "Пн–Пт, 10:00–19:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 py-3" style={{ borderBottom: "1px solid var(--sand)" }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--linen)" }}>
                    <Icon name={c.icon} size={16} style={{ color: "var(--terracotta)" }} />
                  </div>
                  <div>
                    <div className="font-body text-xs" style={{ color: "var(--bark)", opacity: 0.5 }}>{c.label}</div>
                    <div className="font-body text-sm font-medium" style={{ color: "var(--bark)" }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="rounded-2xl p-8" style={{ background: "var(--cream)", border: "1.5px solid var(--sand)" }}>
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "var(--linen)" }}>
                    <Icon name="Check" size={28} style={{ color: "var(--terracotta)" }} />
                  </div>
                  <h3 className="font-display text-2xl mb-2" style={{ color: "var(--bark)" }}>Заявка отправлена!</h3>
                  <p className="font-body text-sm" style={{ color: "var(--bark)", opacity: 0.65 }}>
                    Я свяжусь с вами в ближайшее время
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider block mb-2" style={{ color: "var(--bark)", opacity: 0.6 }}>Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Как вас зовут?"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none"
                      style={{ background: "var(--linen)", border: "1.5px solid var(--sand)", color: "var(--bark)" }}
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider block mb-2" style={{ color: "var(--bark)", opacity: 0.6 }}>Телефон или Telegram</label>
                    <input
                      type="text"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none"
                      style={{ background: "var(--linen)", border: "1.5px solid var(--sand)", color: "var(--bark)" }}
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider block mb-2" style={{ color: "var(--bark)", opacity: 0.6 }}>Расскажите о вашем пространстве</label>
                    <textarea
                      rows={4}
                      placeholder="Какие комнаты? Что хотите изменить?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none resize-none"
                      style={{ background: "var(--linen)", border: "1.5px solid var(--sand)", color: "var(--bark)" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-body font-medium text-base transition-all hover:opacity-90"
                    style={{ background: "var(--terracotta)", color: "var(--cream)" }}
                  >
                    Отправить заявку
                  </button>
                  <p className="font-body text-xs text-center" style={{ color: "var(--bark)", opacity: 0.45 }}>
                    Нажимая кнопку, вы соглашаетесь на обработку данных
                  </p>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center" style={{ background: "var(--bark)" }}>
        <span className="font-display text-lg italic" style={{ color: "var(--cream)", opacity: 0.75 }}>
          Уютный интерьер — дизайнер-хоумстейджер
        </span>
        <p className="font-body text-xs mt-2" style={{ color: "var(--cream)", opacity: 0.35 }}>
          © {new Date().getFullYear()} Все права защищены
        </p>
      </footer>

    </div>
  );
}