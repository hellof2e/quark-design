import reactify from "@quarkd/reactify";
import "quarkd/lib/search";
import { FC } from "react";
import { Props, CustomEvent } from "quarkd/lib/search";
import { componentBaseInterface, ReactifyProps } from "../type";

type SearchProps = componentBaseInterface & ReactifyProps<Props, CustomEvent>;
type SearchType = FC<SearchProps>;

const Search = reactify("quark-search") as SearchType;
export default Search;
