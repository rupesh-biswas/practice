import { Navbar, NavbarBrand } from "@nextui-org/react";
import Link from "next/link";

export default async function Header() {
  return (
    <Navbar>
      <NavbarBrand className="w-full">
        <div className="m-2 flex w-full items-center justify-between">
          <Link href={"/"} className="text-xl font-bold">
            Snippets
          </Link>
          <Link href={"/snippets/new"} className="rounded border p-2">
            New
          </Link>
        </div>
      </NavbarBrand>
    </Navbar>
  );
}
