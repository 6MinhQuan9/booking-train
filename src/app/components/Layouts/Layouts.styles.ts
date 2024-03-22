import { StyleColor } from "@/app/helpers/variables";
import styled from "styled-components";

export const HeaderStyles = styled.div`
   background: -webkit-linear-gradient(${StyleColor.lightPrimary}, ${StyleColor.darkPrimary});
   color: ${StyleColor.white};
   font-size: 14px;

   .header-content {
      display: flex;
      align-items: end;
      padding: 0 15px;
      margin: 0 80px;
   }
`

export const NavbarStyles = styled.div`
   padding: 10px 15px;
   background: ${StyleColor.primary};
   color: ${StyleColor.white};
   margin-top: 10px;
   text-align: center;
   font-size: 12px;

   .navbar-content {
      padding: 0 15px;

      .navbar-item {
         padding: 5px 8px;
         border-right: 1px solid;
         text-transform: uppercase;
         
         &:last-child {
            border-right: none;
         }
      }
   }
`