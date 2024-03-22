'use client'

import { getToday } from "@/app/helpers/DateHelper"
import Image from "next/image"
import { HeaderStyles } from "./Layouts.styles"

function Header() {
   return (
      <HeaderStyles>
         <div className="header-content">
            <Image
               src="https://dsvn.vn/images/LOGO_n.png"
               alt="logo"
               width={236}
               height={84}
            />

            <div>{getToday()}</div>
         </div>
      </HeaderStyles>
   )
}

export default Header