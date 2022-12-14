import { Box, Button, Flex, Heading, ProposalIcon } from '@plexswap/ui-plex'
import styled from 'styled-components'
import { useTranslation } from '@plexswap/localization'
import Container from 'components/Layout/Container'
import Link from 'next/link'
import DesktopImage from './DesktopImage'

const StyledHero = styled(Box)`
  background: ${({ theme }) => theme.colors.gradientCloudyday};
  padding-bottom: 32px;
  padding-top: 32px;
`

const Hero = () => {
  const { t } = useTranslation()

  return (
    <StyledHero>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Box pr="32px">
            <Heading as="h1" scale="xxl" color="secondary" mb="16px">
              {t('Voting')}
            </Heading>
            <Heading as="h3" scale="lg" mb="16px">
              {t('Have your say in the future of the Plexswap Ecosystem')}
            </Heading>
            <Link href="/voting/proposal/create" passHref prefetch={false}>
              <Button startIcon={<ProposalIcon color="currentColor" width="24px" />}>{t('Make a Proposal')}</Button>
            </Link>
          </Box>
          <DesktopImage src="/images/voting/voting-proposals.png" width={361} height={214} />
        </Flex>
      </Container>
    </StyledHero>
  )
}

export default Hero
