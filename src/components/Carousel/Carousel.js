import { useState } from 'react'
import { Wrapper, Display, ImageWrapper, Image, Caption, Count, BulletWrapper, Bullet, LeftArrow, RightArrow } from './CarouselElements'

const Carousel = ({ images, color }) => {

  const [key, setKey] = useState(0)
  const [appear, setAppear] = useState(true)
  const keyLimit = images.length - 1

  const switchKey = (direction) => {
    if (direction === 'left') {
      setKey(key === 0 ? keyLimit : key - 1)
      animate('out')
      setTimeout(() => {
        animate('in')
      }, 30);
    }
    else if (direction === 'right') {
      animate('out')
      setKey(key === keyLimit ? 0 : key + 1)
      setTimeout(() => {
        animate('in')
      }, 30);
    } else {
      animate('out')
      setKey(direction)
      setTimeout(() => {
        animate('in')
      }, 30);
    }
  }

  const animate = (direction) => {
    if (direction === 'in') {
      setAppear(true)
    }
    else if (direction === 'out') {
      setAppear(false)
    }
  }

  return (
    <Wrapper>
      <Display>
        {appear && (
          <ImageWrapper>

            <Image
              src={images[key].image}
              alt={images[key].caption}
            />
          </ImageWrapper>

        )}
        {appear && (
          <>
            <Caption color={color}>
              {images[key].caption}
            </Caption>
            <Count color={color}>
              {`${key + 1} / ${keyLimit + 1}`}
            </Count>
          </>
        )}
        <BulletWrapper>
          {images.map((img, focus) => {
            return (
              <Bullet focus={focus === key} onClick={() => switchKey(focus)} />
            )
          })}
        </BulletWrapper>
      </Display>
      {appear && (
        <>
          <LeftArrow
            onClick={() => switchKey('left')} >
            <div>❮</div>
          </LeftArrow>
          <RightArrow
            onClick={() => switchKey('right')} >
            <div>❯</div>
          </RightArrow>
        </>
      )}
    </Wrapper>
  )
}

export default Carousel

