import AuctionHouse from './AuctionHouse'
import ItemHologram from './ItemHologram'
import StupdObjectDetection from './StupdObjectDetection'
import TPMenuWithJsonUI from './TPMenuWithJsonUI'
import WayBackHome from './WayBackHome'

export const projects: ProjectBuilder[] = [
  WayBackHome(),
  ItemHologram(),
  TPMenuWithJsonUI(),
  AuctionHouse(),
  StupdObjectDetection(),
]

export interface Button {
  label?: string
  href?: string
  disabled?: boolean
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
