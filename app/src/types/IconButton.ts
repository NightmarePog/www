export interface IconButtonProps {
  name: string
  icon: React.ElementType
  description: string
  projects: Array<{
    name: string
    link?: string
  }>
}
