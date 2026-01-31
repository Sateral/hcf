"use client";

import { FC, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeftCircle,
  ChevronRightCircle,
  X,
  XCircle,
} from "lucide-react";
import IconButton from "@/components/ui/icon-button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
  index: number;
  slideLength: number;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({
  open,
  onClose,
  nextSlide,
  prevSlide,
  children,
  index,
  slideLength,
}) => {
  return (
    // <Transition show={open} appear as={Fragment}>
    //   <Dialog as="div" className="relative z-10" onClose={onClose}>
    //     <div className="fixed inset-0 bg-black bg-opacity-50" />

    //     <div className="fixed inset-0 overflow-y-auto">
    //       <div className="flex h-screen items-center justify-center p-4">
    //         <Transition.Child
    //           as={Fragment}
    //           enter="ease-out duration-300"
    //           enterFrom="opacity-0 scale-95"
    //           enterTo="opacity-100 scale-100"
    //           leave="ease-in duration-200"
    //           leaveFrom="opacity-100 scale-100"
    //           leaveTo="opacity-0 scale-95"
    //         >
    //           <Dialog.Panel className="w-full h-full overflow-hidden rounded-lg">
    //             <div className="relative flex w-full h-full items-center overflow-hidden">
    //               <div className="text-2xl absolute top-3 left-4 z-50 text-black bg-white p-1 rounded-sm align-middle text-center opacity-80">
    //                 {index + 1}/{slideLength}
    //               </div>
    //               <div className="absolute right-4 top-4 z-50 opacity-80">
    //                 <IconButton onClick={onClose} icon={<X size={28} />} />
    //               </div>
    //               <div className="absolute right-4 top-[50%] z-50 opacity-80">
    //                 <IconButton
    //                   onClick={nextSlide}
    //                   icon={<ArrowRight size={28} />}
    //                 />
    //               </div>
    //               <div className="absolute left-4 top-[50%] z-50 opacity-80">
    //                 <IconButton
    //                   onClick={prevSlide}
    //                   icon={<ArrowLeft size={28} />}
    //                 />
    //               </div>
    //               {children}
    //             </div>
    //           </Dialog.Panel>
    //         </Transition.Child>
    //       </div>
    //     </div>
    //   </Dialog>
    // </Transition>
    <div>
      {open && (
        <div className="fixed top-0 left-0 z-[9999] bg-black/80 w-full h-full">
          <div className="">
            {children}
            <div className="absolute top-2 right-2 text-xl text-primaryBg">
              {index + 1}/{slideLength}
            </div>

            <div className="bg-black/40 text-primaryBg fixed bottom-0 left-0 w-full md:gap-32 gap-16 flex justify-center items-center p-2 text-3xl">
              <ChevronLeftCircle
                color="white"
                size={40}
                className="cursor-pointer"
                onClick={prevSlide}
              />
              <XCircle
                color="white"
                size={40}
                className="cursor-pointer"
                onClick={onClose}
              />
              <ChevronRightCircle
                color="white"
                size={40}
                className="cursor-pointer"
                onClick={nextSlide}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
