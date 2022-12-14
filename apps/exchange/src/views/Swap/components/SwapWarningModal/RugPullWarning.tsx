import { useTranslation } from '@plexswap/localization'
import { Text } from '@plexswap/ui-plex'

const RugPullWarning = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text>{t('Suspicious rugpull token')}</Text>
    </>
  )
}

export default RugPullWarning
