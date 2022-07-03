import {
  OngoingIcon,
  CompletedIcon,
  FavouritesIcon,
  WalletIcon,
  AccountIcon,
} from "./Views/Icons";

export const tabs = [
  {
    icon: <OngoingIcon />,
    label: "Ongoing",
  },
  {
    icon: <CompletedIcon />,
    label: "Completed",
  },
  {
    icon: <FavouritesIcon />,
    label: "Favourites",
  },
  {
    icon: <WalletIcon />,
    label: "Wallet",
  },
  {
    icon: <AccountIcon />,
    label: "Account",
  },
];
