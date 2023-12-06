import { FC, ReactNode } from 'react';

type ImageProps = {
  image: {
    src: string,
    alt: string;
  },
  children: ReactNode
}

const Header: FC<ImageProps> = ({image, children}) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  )
}

export default Header