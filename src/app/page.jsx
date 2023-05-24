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
        const url = "http://krasiy.com:8080/booking"
       // console.log('Send: ', data)
        const response = await fetch(url)

        const json = await response.json()
        console.log( json)
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
