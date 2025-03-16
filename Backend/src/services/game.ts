const getUsers = async (): Promise<object[] | null> => {
  const users = [
    { id: 1, name: "João" },
    { id: 2, name: "Maria" },
  ];

  return users;
};

export default { getUsers };
