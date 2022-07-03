import { useContext } from "react";
import { FirebaseContext } from "../Firebase";
import { AppContext } from "../Context";

import Logo from "../Views/Logo";
import Button from "../Views/Button";
import Sidebar from "../Views/Sidebar";
import { Tab } from "../Views/TabNavigation";
import { AddIcon, SignOutIcon, DarkModeOffIcon } from "../Views/Icons";
import { tabs } from "../Constants";

const AddButton = () => {
  const { setVisibleAddItem } = useContext(AppContext);

  return (
    <Button type="primary" onClick={() => setVisibleAddItem(true)}>
      <AddIcon /> New Bid
    </Button>
  );
};

const BottomBar = () => {
  const { signOut } = useContext(FirebaseContext);
  return (
    <div className="flex-row" style={{ gap: "8px" }}>
      <Button type="transparent left_align expanded">
        <DarkModeOffIcon />
        India
      </Button>
      <Button type="icon">
        <DarkModeOffIcon />
      </Button>
      <Button type="icon" onClick={signOut}>
        <SignOutIcon />
      </Button>
    </div>
  );
};

const AppSidebar = () => {
  const { sidebarVisibleMobile } = useContext(AppContext);

  return (
    <Sidebar mobileVisible={sidebarVisibleMobile}>
      <Logo />
      <AddButton />
      <div className="flex-col expanded" style={{ gap: "10px" }}>
        {tabs.map(({ icon, label }, idx) => (
          <Tab page={idx} key={idx}>
            {icon} {label}
          </Tab>
        ))}
      </div>
      <BottomBar />
    </Sidebar>
  );
};

export default AppSidebar;
