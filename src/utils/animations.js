import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  });
};

export const fadeIn = (element) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  });
};

export const staggerChildren = (parent, children) => {
  return gsap.from(children, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: parent,
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    }
  });
};

export const floatingAnimation = (element) => {
  return gsap.to(element, {
    y: 15,
    duration: 2,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
  });
};

export const glowAnimation = (element) => {
  return gsap.to(element, {
    boxShadow: '0 0 20px rgba(190, 44, 255, 0.6)',
    duration: 1.5,
    repeat: -1,
    yoyo: true
  });
};