import WayBackHome from './WayBackHome'

export const projects: ProjectBuilder[] = [WayBackHome()]

export interface ProjectBuilder {
  id: string
  title: string
  description: string
  bannerSrc?: string
  iconSrc?: string
}
