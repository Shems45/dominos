import { useEffect } from "react";

export function HeartsRain({ show }: { show: boolean }) {
  useEffect(() => {
    if (!show) return;
    const hearts: HTMLDivElement[] = [];
    for (let i = 0; i < 22; i++) {
      const heart = document.createElement("div");
      heart.className = "heart-rain";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 1.6 + Math.random() * 1.6 + "s";
      heart.style.fontSize = 2.2 + Math.random() * 1.5 + "rem";
      heart.textContent = ["💖","💗","💓","💞","💕","❤️"][Math.floor(Math.random() * 6)];
      document.body.appendChild(heart);
      hearts.push(heart);
    }
    return () => {
      hearts.forEach((heart) => heart.remove());
    };
  }, [show]);
  return null;
}
