'use client';
import Footer from './components/footer'
import Header from './components/header'
import FormSteps from './components/formSteps'



export default function Home() {

    const sendData = async () => {
        const data = {
            name: "ruslan",
            id: "1"
        }
        const url = "https://localhost:4000/booking/"
        console.log('Send: ', data)
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        console.log(response)
    };

    return (
        <main>
            <Header />
            <button onClick={sendData} className='p-2 rounded-md bg-sky-600 text-white'>Send to api</button>
            <FormSteps />
            <Footer />
        </main>
    )
}
