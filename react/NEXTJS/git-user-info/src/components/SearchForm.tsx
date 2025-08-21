import { useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { toast } from "sonner";

type props = {
    userName: string,
    setUserName:  React.Dispatch<React.SetStateAction<string>>,
}

function SearchForm({userName, setUserName}: props) { 
    const [text, setText] = useState(userName);

    function hundlerOnSubmit(e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (text.length === 0) {
            toast.error("Please enter a  valid username")
            return;
        }
        setUserName(text);
    }

    return <form onSubmit={hundlerOnSubmit} className="flex gap-2 items-center w-full lg:w-1/3 mb-8">
        <Label htmlFor="search" className="sr-only">Search</Label>
        <Input type="text" value={text} placeholder="Search Githab User... " onChange={(e) => setText(e.target.value)} className="flex-grow bg-background" />
        <Button type="submit">Search</Button>
    </form>
}

export default SearchForm
