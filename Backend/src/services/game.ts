const getUsers = async (): Promise<object[] | null> => {
  // Aqui deveria haver uma consulta ao banco de dados
  const users = [
    { id: 1, name: "João" },
    { id: 2, name: "Maria" },
  ];

  return users;
};

export default { getUsers };
