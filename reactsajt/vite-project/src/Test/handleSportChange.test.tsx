import { render, screen, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import Kreiraj from "../pages/Kreiraj/Kreiraj";

test("da li handleSportChange azurira sport ispravno",async () => {
  render(<Kreiraj />);
  
  const sportInput = screen.getByTestId("sport");
  
  userEvent.type(sportInput, "Fudbal");
  
  await waitFor(() =>expect(sportInput).toHaveValue("Fudbal"));
});
