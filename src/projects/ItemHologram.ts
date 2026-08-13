import type { ProjectBuilder } from '.'

export default function (): ProjectBuilder {
  return {
    id: 'item-hologram',
    title: 'Item Hologram',
    description: 'Allows you to display name of item and stack size.',
    iconSrc:
      'https://media.forgecdn.net/avatars/thumbnails/1906/102/256/256/639190274091413603.png',
    primaryBtn: {
      href: 'https://www.curseforge.com/minecraft-bedrock/addons/item-hologram',
    },
  }
}
