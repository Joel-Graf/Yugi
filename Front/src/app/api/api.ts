const API_BASE_URL = "http://localhost:3001"; // Replace with your actual backend URL

export async function createGame(player: PlayerDTO) {
  const url = `${API_BASE_URL}/api/game`;

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const config: RequestInit = {
    method: "POST",
    headers: {
      ...defaultHeaders,
    },
    body: JSON.stringify(player),
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "API request failed");
  }

  return response.json();
}
