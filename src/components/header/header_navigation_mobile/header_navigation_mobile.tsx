import { useState } from "react";
import profile from "public/profile.png";
import favorite from "public/favorite.png";
import basket from "public/basket.png";
import Image from "next/image";
import Link from "next/link";
const HeaderNavigationMobile: React.FC<{}> = () => {
  return (
    <nav>
      <Link href={"/login"}>
        <Image src={profile} alt="login" width={26} height={26} />
      </Link>
      <Link href={"/favorites"}>
        <Image src={favorite} alt="favorites" width={26} height={26} />
      </Link>
      <Link href={"/purchase"}>
        <Image src={basket} alt="purchase" width={26} height={26} />
      </Link>
    </nav>
  );
};

export default HeaderNavigationMobile;
