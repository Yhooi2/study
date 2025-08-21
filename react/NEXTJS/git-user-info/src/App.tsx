import { useState } from "react";
import SearchForm from "./components/SearchForm";
import { UserProfile } from "./components/UserProfile";

function App() {
  const [userName, setUserName] = useState("")
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <SearchForm userName={userName} setUserName={setUserName} />
        {userName && <UserProfile userName={userName} />}
      </div>
    </main>
  )
}

export default App
