import { useEffect } from 'react'

const useBodyColor = (props) => {
  useEffect(() => {
    switch (props) {
      case 'darkblue':
        document.body.style.backgroundColor = '#081827'
        break;
      case 'blue':
        document.body.style.backgroundColor = '#2163bd'
        break;
      case 'darkgray':
        document.body.style.backgroundColor = '#222222'
        break;
    }
  }, [])
}

export default useBodyColor