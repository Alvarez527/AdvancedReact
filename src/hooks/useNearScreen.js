import { useState, useRef, useEffect } from 'react'

export function useNearScreen () {
  const [show, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(function () {
    import('intersection-observer')
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(ref.current)
      })
  }, [ref])

  return [show, ref]
}
