import { useContext } from "react";

import SignInPage from "./App/SignIn";
import Page from "./Views/Page";
import AppSidebar from "./App/Sidebar";

import OngoingPage from "./App/OngoingPage";
import CompletedPage from "./App/CompletedPage";
import FavouritesPage from "./App/FavouritesPage";
import AccountPage from "./App/AccountPage";
import WalletPage from "./App/WalletPage";

import { TabView, TabNavigationProvider } from "./Views/TabNavigation";

import { FirebaseContext } from "./Firebase.jsx";
import { AppContext } from "./Context";
import AddPage from "./App/AddPage";

function App() {
  const { visibleAddItem, setVisibleAddItem } = useContext(AppContext);
  const { user } = useContext(FirebaseContext);

  // If user is signed in, i.e. user is not null, then show the app
  // Otherwise, show the sign in page
  return user ? (
    <Page>
      <TabNavigationProvider>
        <AppSidebar />
        <TabView>
          <OngoingPage />
          <CompletedPage />
          <FavouritesPage />
          <WalletPage />
          <AccountPage />
        </TabView>
      </TabNavigationProvider>
      {visibleAddItem && (
        <AddPage closeFunction={() => setVisibleAddItem(false)} />
      )}
    </Page>
  ) : (
    <SignInPage />
  );
}

export default App;
