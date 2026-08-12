import ItemHologram from './ItemHologram'
import WayBackHome from './WayBackHome'

export const projects: ProjectBuilder[] = [WayBackHome(), ItemHologram()]

export interface Button {
  label: string
  href?: string
}

export interface ProjectBuilder {
  id: string
  title: string
  description: string
  bannerSrc?: string
  iconSrc?: string
  primaryBtn?: Button
  secondaryBtn?: Button
}
