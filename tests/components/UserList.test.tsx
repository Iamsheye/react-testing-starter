import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("User List componentr", () => {
  it("renders user list with correct links", () => {
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
    render(<UserList users={users} />);

    const userLinks = screen.getAllByRole("link");
    expect(userLinks).toHaveLength(users.length);

    userLinks.forEach((link, index) => {
      expect(link).toHaveAttribute("href", `/users/${users[index].id}`);
      expect(link).toHaveTextContent(users[index].name);
    });
  });

  it("renders 'No users available' message when users array is empty", () => {
    const users: User[] = [];
    render(<UserList users={users} />);

    const noUsersMessage = screen.getByText(/No users available./i);
    expect(noUsersMessage).toBeInTheDocument();
  });
});
