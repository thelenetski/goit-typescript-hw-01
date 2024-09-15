type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): void {
  // Оновлення користувача
  // зараз нічого не повертає тому поставив void
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
