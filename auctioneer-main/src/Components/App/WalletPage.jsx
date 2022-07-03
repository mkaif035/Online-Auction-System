import React from "react";
import List from "../Views/List";
import ListItem from "../Views/ListItem";
import TopBar from "./TopBar";

const WalletPage = () => {
  return (
    <div className="content">
      <TopBar />
      <div className="p-4">
        <List
          heading="Wallet Balance"
          subtitle="View Recent Wallet Transactions in the Account section."
        >
          <ListItem>
            <p>Indian Rupee (INR)</p>
            <p className="opacity-60">{1021220.0}</p>
          </ListItem>
          <ListItem>
            <p>US Dollar (USD)</p>
            <p className="opacity-60">{2303.0}</p>
          </ListItem>
          <ListItem>
            <p>Bitcoin (BTC)</p>
            <p className="opacity-60">{1.2032}</p>
          </ListItem>
          <ListItem>
            <p>Etherium (ETH)</p>
            <p className="opacity-60">{224.32}</p>
          </ListItem>
        </List>
        <div className="p-4"></div>
        <List
          heading="Shared With"
          subtitle="People you have shared your Wallet will appear here."
        >
          <ListItem>
            You have not shared your wallet with other people.
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default WalletPage;
