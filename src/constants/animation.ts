export const sectionViewport = { once: true, amount: 0.05 } as const

export const containerVariants = {
  hidden: {},
  visible: (i = 1) => ({
    transition: { staggerChildren: 0.08, delayChildren: 0.02 * i },
  }),
}

export const itemVariants = {
  // Keep content opaque so hash jumps don't land on blank sections.
  hidden: { y: 16 },
  visible: {
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}
