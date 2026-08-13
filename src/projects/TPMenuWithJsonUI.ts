import type { ProjectBuilder } from '.'

export default function (): ProjectBuilder {
  return {
    id: 'tp-menu-with-json-ui',
    title: 'TP Menu with JSON UI',
    description: 'Customizable TP menu for servers/realms',
    bannerSrc:
      'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/messaging_message/attachment/3f93e3522bf9b5936f99ee679e8395c6-1774796506650/Screenshot_20260329_220100.png?__cld_token__=exp=1786599720~hmac=7ed51ef5b190adcf13bdc3f815d1096e127875befff48c148723407876e24ce6',
    primaryBtn: {
      label: 'Fiverr Client',
      disabled: true,
    },
  }
}
