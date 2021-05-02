import { useEffect } from 'react'

const useBodyColor = (props) => {
  useEffect(() => {
    switch (props) {
      case 'darkblue':
        document.body.style.backgroundColor = '#0b0c10'
        break;
      case 'blue':
        document.body.style.backgroundColor = '#2163bd'
        break;
      case 'darkgray':
        document.body.style.backgroundColor = '#101522'
        break;
      case 'white':
        document.body.style.backgroundColor = '#f2f2f2'
        break;
    }
  }, [])
}

export default useBodyColor