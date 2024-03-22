import { HomeFilled } from "@ant-design/icons";
import { useLocale, useTranslations } from "next-intl";
import NavBar from "./NavBar";

function NavBarContainer() {
  const t = useTranslations('Menu');
  const currentLocale = useLocale();

  const menuItems = [
    { url: `/`, title: '', icon: <HomeFilled /> },
    { url: `${currentLocale}/ticketInfo`, title: t('ticketInfo') },
    { url: `${currentLocale}/returnTicket`, title: t('returnTicket') },
    { url: `${currentLocale}/checkTicket`, title: t('checkTicket') },
    { url: `${currentLocale}/timePrice`, title: t('timePrice') },
    { url: `${currentLocale}/promotions`, title: t('promotions') },
    { url: `${currentLocale}/rules`, title: t('rules') },
    { url: `${currentLocale}/instruction`, title: t('instruction') },
    { url: `${currentLocale}/contact`, title: t('contact') },
    { url: `/`, title: t('language') }
  ];

  return (
    <NavBar
      menuItems={menuItems}
    />
  )
}

export default NavBarContainer