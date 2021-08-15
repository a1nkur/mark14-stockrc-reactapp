export const genericAnimate = {
  hidden: {},
  show: {
    transition: {
      when: "beforeChild",
      delay: 1,
      staggerChildren: 0.25,
    },
  },
};

export const genericAnimate1 = {
  hidden: {},
  show: {
    transition: {
      when: "beforeChild",
      delay: 1,
      staggerChildren: 0.25,
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const titleAnimate = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const lineAnimation = {
  hidden: { width: "0%" },
  show: { width: "80%", transition: { duration: 1 } },
};

export const OutputScreenAnimate = {
  hidden: { opacity: 0.4 },
  show: { opacity: 1 },
  transition: {
    delay: 1,
    duration: 1.5,
    type: "spring",
    when: "beforeChild",
    staggerChildren: 1,
  },
};
