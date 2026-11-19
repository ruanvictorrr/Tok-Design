// Tok Design · guia de cortina + animações de entrada

const WA = "5581989410925";

const SUGESTOES = {
  "escurecer-moderno": {
    nome: "Cortina Rolô Blackout",
    texto: "Bloqueia a luz por completo e mantém o visual limpo e moderno.",
    img: "img/rolo-blackout.jpg",
  },
  "escurecer-classico": {
    nome: "Cortina Romana Blackout",
    texto: "Escuridão total com os gomos elegantes da romana. Aconchego na medida.",
    img: "img/romana-blackout.jpg",
  },
  "filtrar-moderno": {
    nome: "Cortina Rolô Tela Solar",
    texto: "Corta o calor e o brilho do sol sem tirar a vista de fora.",
    img: "img/rolo-tela-solar.jpg",
  },
  "filtrar-classico": {
    nome: "Tradicional Wave em Linho",
    texto: "Ondas do teto ao chão que suavizam a luz e trazem movimento ao ambiente.",
    img: "img/wave-linho-prime.jpg",
  },
  "privacidade-moderno": {
    nome: "Cortina Romana Translúcida",
    texto: "Linhas organizadas que deixam a luz entrar e protegem de olhares de fora.",
    img: "img/romana-quarto.jpg",
  },
  "privacidade-classico": {
    nome: "Cortina de Voil",
    texto: "Leveza e luz suave. Privacidade sem escurecer o ambiente.",
    img: "img/voil-sala.jpg",
  },
};

const form = document.getElementById("guide");

function atualizarGuia() {
  const dados = new FormData(form);
  const amb = dados.get("amb");
  const luz = dados.get("luz");
  const estilo = dados.get("estilo");
  const s = SUGESTOES[`${luz}-${estilo}`];

  const img = document.getElementById("resImg");
  if (!img.src.endsWith(s.img)) {
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = s.img;
      img.style.opacity = 1;
    }, 200);
  }
  document.getElementById("resName").textContent = s.nome;
  document.getElementById("resText").textContent = s.texto;

  const msg =
    `Olá! Fiz o guia no site da Tok Design.\n` +
    `Ambiente: ${amb}\n` +
    `Sugestão: ${s.nome}\n` +
    `Gostaria de agendar uma visita de medição.`;
  document.getElementById("guideCta").href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}

if (form) {
  form.addEventListener("change", atualizarGuia);
  atualizarGuia();
}

// Animação de entrada nas seções
const alvos = document.querySelectorAll(".section-head, .model, .guide, .gallery figure, .steps li, .showroom-copy, .showroom-photo, .final h2");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  alvos.forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}
