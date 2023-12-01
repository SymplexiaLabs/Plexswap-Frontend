import { useEffect } from 'react'
import { useWayaBusdPrice } from 'hooks/useStablecoinPrice'

const useGetDocumentTitlePrice = () => {
  const wayaPriceBusd = useWayaBusdPrice()
  useEffect(() => {
    const wayaPriceBusdString = wayaPriceBusd ? wayaPriceBusd.toFixed(2) : ''
    document.title = `Plex Swap - ${wayaPriceBusdString}`
  }, [wayaPriceBusd])
}
export default useGetDocumentTitlePrice
