import type { ProjectBuilder } from '.'

export default function (): ProjectBuilder {
  return {
    id: 'way-back-home',
    title: 'Way Back Home: Locator Bar and Waypoint',
    description: 'Adds a modern Waypoint addon to your world.',
    iconSrc:
      'https://media.forgecdn.net/avatars/thumbnails/1900/732/256/256/639187693368505764.png',
    primaryBtn: {
      href: 'https://www.curseforge.com/minecraft-bedrock/addons/way-back-home-locator-bar-and-waypoint',
    },
  }
}
