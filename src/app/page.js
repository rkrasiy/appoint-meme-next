import Image from 'next/image';
import { user } from '../../data/user';

export default function Home() {
    return (
        <main className="bg-sky-100">
            <div className='container flex h-screen w-screen m-auto border flex-col p-12'>
                <div className='p-4'>
                    <Image className="m-auto mb-4" src={user.logo} alt="Next.js Logo"  width={50}  height={50} priority  />
                    <h2 className='block text-center font-bold text-3xl mb-4'>{user.title}</h2>
                    <h3 className='block text-center'>{user.subtitle}</h3>
                </div>
                <div className='flex-1'>
                    <div className='p-4 border border-slate-800 rounded-xl max-w-md m-auto'>
                        <div className='flex justify-between'>
                            {
                                [1,2,3].map( num => (
                                    <span key={num} className='rounded-full w-6 h-6 text-sm bg-slate-400 text-center leading-none py-1'></span>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
