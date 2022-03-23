import React from "react";
import gsap from "gsap";

export const useApp = () => {
  const cardOneRef = React.useRef(null);
  const cardTwoRef = React.useRef(null);
  const textRef = React.useRef(null);
  const textRef2 = React.useRef(null);
  const textRef3 = React.useRef(null);

  React.useEffect(() => {
    gsap.fromTo(cardOneRef.current, {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
    })
  }, [])

  React.useEffect(() => {
    gsap.fromTo(cardTwoRef.current, {
      y: -100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
    })
  }, [])

  React.useEffect(() => {
    gsap.from(textRef.current, {
      duration: 0.8,
      y: 150,
      autoAlpha: 0,
      ease: "power3.out",
      stagger: 1.5
    })
  }, [])

  React.useEffect(() => {
    gsap.from(textRef2.current, {
      duration: 1.5,
      y: 150,
      autoAlpha: 0,
      ease: "power3.out",
      stagger: 1.5
    })
  }, [])

  React.useEffect(() => {
    gsap.from(textRef3.current, {
      duration: 2,
      y: 150,
      autoAlpha: 0,
      ease: "power3.out",
      stagger: 1.5
    })
  }, [])

  function onHover({ currentTarget }: any) {
    gsap.to(currentTarget, {
      duration: 0.5,
      scale: 1.1,
      ease: "power3.inOut"
    })
  }

  function onLeave({ currentTarget }: any) {
    gsap.to(currentTarget, {
      duration: 0.5,
      scale: 1,
      ease: "power3.inOut"
    })
  }

  const isMobile = window.innerWidth < 1440;


  return {
    cardOneRef,
    cardTwoRef,
    textRef,
    textRef2,
    textRef3,
    isMobile,
    onHover,
    onLeave,
  }
}