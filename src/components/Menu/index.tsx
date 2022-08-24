import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { Menu as UIKitMenu, ModalV2 } from '@plexswap/ui-plex'
import { useTranslation, languageList } from '@plexswap/localization'
import PhishingWarningBanner from 'components/PhishingWarningBanner'
import { NetworkSwitcher } from 'components/NetworkSwitcher'
import { NetworkSupportModal } from 'components/NetworkSupportModal'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useTheme from 'hooks/useTheme'
import { usePhishingBannerManager } from 'state/user/hooks'
import UserMenu from './UserMenu'
import { useMenuItems } from './hooks/useMenuItems'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'

const Menu = (props) => {
  const { isDark, setTheme } = useTheme()
  const { currentLanguage, setLanguage } = useTranslation()
  const { pathname } = useRouter()
  const [showPhishingWarningBanner] = usePhishingBannerManager()
  const { chain } = useActiveWeb3React()

  const menuItems = useMenuItems()

  const activeMenuItem = getActiveMenuItem({ menuConfig: menuItems, pathname })
  const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'light' : 'dark')
  }, [setTheme, isDark])

  return (
    <>
      <UIKitMenu
        linkComponent={(linkProps) => {
          return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} prefetch={false} />
        }}
        rightSide={
          <>
            <NetworkSwitcher />
            <UserMenu />
          </>
        }
        banner={showPhishingWarningBanner && typeof window !== 'undefined' && <PhishingWarningBanner />}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={currentLanguage.code}
        langs={languageList}
        setLang={setLanguage}

        links={menuItems}
        subLinks={activeMenuItem?.hideSubNav || activeSubMenuItem?.hideSubNav ? [] : activeMenuItem?.items}

        activeItem={activeMenuItem?.href}
        activeSubItem={activeSubMenuItem?.href}

        {...props}
      />
      <ModalV2 isOpen={(activeSubMenuItem?.disabled || activeMenuItem?.disabled) && !chain?.unsupported}>
        <NetworkSupportModal
          title={activeSubMenuItem?.disabled ? activeSubMenuItem?.label : activeMenuItem?.label}
          image={activeSubMenuItem?.image || activeMenuItem?.image}
        />
      </ModalV2>
    </>
  )
}

export default Menu
