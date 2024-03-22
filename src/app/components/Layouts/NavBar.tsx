'use client'
import Link from "next/link";
import { NavbarStyles } from "./Layouts.styles";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

interface INavbarProps {
  menuItems: any[]
}

function NavBar(props: INavbarProps) {
  const { menuItems = [] } = props;
  const [_, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();

  const onChangeLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'vi' : 'en';
  }

  return (
    <NavbarStyles>
      <div className="navbar-content">
        {
          menuItems.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="navbar-item"
              onClick={onChangeLanguage}
            >
              {item.title || item.icon}
            </Link>
          ))
        }
      </div>
    </NavbarStyles>
  )
}

export default NavBar