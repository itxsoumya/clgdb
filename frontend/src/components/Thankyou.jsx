
import thankimg from '../asset/thank.jpg'


const Thankyou = ({firstName}) => {
    return (
        <div className="flex-grow m-3 pt-4">

            <div className="bg-rred-200 mx-auto max-w-3xl">
                
                <img src={thankimg} alt="" />

                <div className='flex p-5 text-3xl justify-center'>
                   Thank you &nbsp; <b className='capitalize text-green-600'>{firstName}</b>. Your Data Our Responsibility 🤡
                </div>
            </div>

        </div>
    )
}

export default Thankyou