import { useState } from "react";

const ProductDetails = () => {
  const [images] = useState({
    img1: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641441332.80624656.png",
    img2: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641441341.06699115.png",
    img3: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641485855.26112991.png",
    img4: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641485803.86155485.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  // const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl max-w-[500px] m-auto"
        />
        <div className="flex flex-row justify-between h-24 max-w-[600px] m-auto w-full">
          <img
            src={images.img1}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="w-24 h-24 rounded-md cursor-pointer"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-violet-600 font-semibold">
            Special Features
          </span>
          <h1 className="text-3xl font-bold">Xiomi 11i 3</h1>
        </div>
        <p className="text-gray-700">
          Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi
          chilometri, Invincible 3 offre un livello di comfort elevatissimo
          sotto il piede per aiutarti a dare il massimo oggi, domani e oltre.
          Questo modello incredibilmente elastico e sostenitivo, è pensato per
          dare il massimo lungo il tuo percorso preferito e fare ritorno a casa
          carico di energia, in attesa della prossima corsa.
        </p>
        <h6 className="text-2xl font-semibold">$ 599.00</h6>
        <div className="flex flex-row items-center gap-12">
          {/* <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div> */}
          {/* <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Buy Now</button> */}
          {/* Open the modal using ID.showModal() method */}
          <button
            className="btn bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full"
            onClick={() => (window as any).my_modal_1.showModal()}
          >
            Buy Now
          </button>
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
              {/* xs */}

              <p className="p-4"> Name</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs "
              />

              <p className="p-2"> Address</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs "
              />
              <p className="p-2"> Email</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs "
              />
              <p className="p-2">Product Quantity</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs "
              />

              {/* md */}
              {/* <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs pt-2" /> */}

              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
