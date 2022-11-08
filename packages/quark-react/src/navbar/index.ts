import reactify from "@quarkd/reactify";
import "quarkd/lib/navbar";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/navbar";
import { componentBaseInterface, ReactifyProps } from "../type";

type NavbarProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type NavbarType = FC<NavbarProps>;

const Navbar = reactify("quark-navbar") as NavbarType;
export default Navbar;
