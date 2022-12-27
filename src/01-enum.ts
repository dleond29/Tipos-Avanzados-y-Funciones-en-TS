enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}

type User = {
  username: string;
  role: ROLES;
}

const dialUser: User = {
  username: "dialleon",
  role: ROLES.ADMIN,
}
