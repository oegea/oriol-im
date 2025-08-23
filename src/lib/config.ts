// Environment configuration
export const config = {
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oriol.im',
    title: process.env.NEXT_PUBLIC_SITE_TITLE || "I'm Oriol",
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Just the place where @OriolEgea writes things...',
  },
  contact: {
    formUrl: process.env.NEXT_PUBLIC_CONTACT_FORM_URL || 'https://wp.oriol.im/contact-form/index.php',
  },
  // Brand colors from Frontity theme
  theme: {
    colors: {
      primary: '#fccb0b',
      textDark: 'rgba(12, 17, 43)',
      textLight: 'rgba(12, 17, 43, 0.8)',
      textMeta: 'rgba(12, 17, 43, 0.9)',
      linkColor: 'rgb(239, 190, 0)',
    },
  },
} as const