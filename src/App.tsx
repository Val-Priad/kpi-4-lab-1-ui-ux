import Buttons from "./components/Buttons";
import Checkboxes from "./components/Checkboxes";
import DropdownLists from "./components/DropdownLists";
import Links from "./components/Links";
import Radio from "./components/Radio";
import TableGrid from "./components/DataGrid";
import Tabs from "./components/Tabs";
import TextInputs from "./components/TextInputs";
import TextLabels from "./components/TextLabels";
import Tooltips from "./components/Tooltips";

function App() {
  return (
    <>
      <Radio />
      <Checkboxes />
      <TextInputs />
      <Tabs />
      <Buttons />
      <TextLabels />
      <Links />
      <Tooltips />
      <DropdownLists />
      <TableGrid />
    </>
  );
}

export default App;
