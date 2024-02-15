import { ElementType, ReactNode, ComponentPropsWithoutRef } from "react"

type ContainerProps<T extends ElementType> = {
  as: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({as, children, ...props}: ContainerProps<C>) {
  const Container = as || 'div'
  return (
    <Container {...props as any}>{children}</Container>
  )
}
