import { useState } from "react"

const SubmitCat = () => {
    const [name, setName] = useState('');

    const handleSubmit = {event: React.FormEvent} => {
        event?.preventDefault();
    }
};