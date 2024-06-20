import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  const user = {
    id: 1,
    name: "John Doe",
    isAdmin: false,
  };

  it("renders user profile without edit button for non-admin user", () => {
    render(<UserAccount user={user} />);
    expect(screen.getByText("User Profile")).toBeInTheDocument();
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("renders user profile with edit button for admin user", () => {
    const nonAdminUser = { ...user, isAdmin: true };
    render(<UserAccount user={nonAdminUser} />);
    expect(screen.getByText("User Profile")).toBeInTheDocument();
    expect(screen.queryByText("Edit")).toBeInTheDocument();
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});
