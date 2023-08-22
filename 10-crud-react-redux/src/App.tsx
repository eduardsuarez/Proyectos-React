import "./App.css";
import { CreateNewUser } from "./components/CreateNewUsers";
import { ListOfUsers } from "./components/ListOfUsers";

function App() {
	return (
		<>
			<ListOfUsers />
			<CreateNewUser />
		</>
	);
}
export default App;
