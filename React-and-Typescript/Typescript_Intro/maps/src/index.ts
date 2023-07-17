// <reference types='@types/google.maps' />; /// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { User } from "./User";

import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
const customMap = new CustomMap("map");

customMap.addrMarker(user);
customMap.addrMarker(company);
