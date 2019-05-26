
const getStaticUrl = (env) => {
    switch (env) {
      case 'production':
        return 'https://whois.fullcrack.dev/';
      case 'staging':
        return '';
      case 'development':
        return 'http://localhost:9000/';
      default:
        return 'http://localhost:9000/';
    }
  }

export const STATIC_URL_PREFIX = getStaticUrl(process.env.NODE_ENV);
export const URL_IMG_PREFIX = 'images/';
export const IMG_STATIC_PREFIX_URL = STATIC_URL_PREFIX + URL_IMG_PREFIX;