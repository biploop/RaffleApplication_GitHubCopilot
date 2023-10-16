import { AddRaffleEntryView } from "./components/AddRaffleEntryView"; 
import { RaffleEntriesView } from "./components/RaffleEntriesView";
import { Home } from "./components/Home";
import { Confirmation } from "./components/Confirmation";
import { RaffleDrawView } from "./components/RaffleDrawView"; 
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/add-raffle-entry',
      element: <AddRaffleEntryView />
  },
  {
    path: '/raffle-entries',
    element: <RaffleEntriesView />
  },
  {
    path: '/confirmation',
    element: <Confirmation />
    },
    {
        path: '/raffle-draw',
        element: <RaffleDrawView />
    }
];

export default AppRoutes;
