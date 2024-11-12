// api.js
export async function fetchBoardData() {
    try {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.boards || []; // Adjust based on the actual structure of the API response
    } catch (error) {
      console.error("Error fetching board data:", error);
      return [];
    }
  }
  