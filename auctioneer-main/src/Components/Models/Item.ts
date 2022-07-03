// Contains implementation of Item class.
// This is how an item is represented in the database.
// The App expects the item to be in this format.
// Parts of App my bread or have unintented functionality
// if item doesnot have following format.
export default class Item {
  // Marks whether the item is still being auctioned, or has been sold.
  // false means the item has been sold.
  // true means the item is still being auctioned.
  active = false;

  // Contains all the bids made on the item.
  // Each bid is represented by an object with the following format:
  //   user: string, The User ID of the user who made the bid.
  //   price: number, The price of the bid.
  //   createdAt: Date, The date and time the bid was made.
  // First bid is the inital price of the item,
  //   user that listed the item, and the timestamp item was listed.
  bids: Bid[];

  // Category of the item. Eg: Vehicle, Book, etc.
  category: string;

  // The Timestamp of when the item was created.
  createdAt = new Date();

  // User supplied description of the item.
  // May Be Empty
  description: string;

  // URL of Images that a user may supply.
  // May be empty.
  images: string[];

  // The name of the item.
  // Cannot be empty.
  name: string;

  // The User who listed the item to be sold.
  // This is the user who created the item.
  // This is a user object with the following format:
  //   name: string, The name of the user.
  //   bio: string, The bio of the user. Optional.
  //   uid: string, The User ID of the user.
  owner: Owner;

  // The initial price of the item.
  price: number;

  // The tags that the item has.
  tags: string[];

  constructor(
    user: any,
    name: string,
    description: string,
    images: string[],
    initial_price: number,
    tags: string[]
  ) {
    this.bids = [
      {
        user: user.id,
        price: initial_price,
        createdAt: new Date(),
      },
    ];
    this.description = description;
    this.images = images;
    this.name = name;
    this.owner = {
      name: user.name,
      bio: "Just Here to Sell Some Stuff",
      uid: user.id,
    };
    this.price = initial_price;
    this.tags = tags;
  }
}

// Interface for a Bid to be followed.
interface Bid {
  price: number;
  user: string;
  createdAt: Date;
}

// Interface for the owner of an item.
interface Owner {
  name: string;
  bio?: string;
  uid: string;
}
