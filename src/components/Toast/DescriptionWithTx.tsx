import { Link, Text } from '@plexswap/ui-plex'
import { getBlockExploreLink, getBlockExploreName } from 'utils'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useTranslation } from '@plexswap/localization'
import truncateHash from 'utils/truncateHash'

interface DescriptionWithTxProps {
  description?: string
  txHash?: string
}

const DescriptionWithTx: React.FC<React.PropsWithChildren<DescriptionWithTxProps>> = ({ txHash, children }) => {
  const { chainId } = useActiveWeb3React()
  const { t } = useTranslation()

  return (
    <>
      {typeof children === 'string' ? <Text as="p">{children}</Text> : children}
      {txHash && (
        <Link external href={getBlockExploreLink(txHash, 'transaction', chainId)}>
          {t('View on %site%', { site: getBlockExploreName(chainId) })}: {truncateHash(txHash, 8, 0)}
        </Link>
      )}
    </>
  )
}

export default DescriptionWithTx
