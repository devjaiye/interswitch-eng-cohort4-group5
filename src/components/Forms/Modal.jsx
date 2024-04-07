import {XMarkIcon } from '@heroicons/react/24/outline'

const Modal = ({isOpen, children, onClose}) => {
  if (!isOpen) return null;
  return (
  <div className="fixed inset-0 z-50 overflow-auto 0 bg-black flex  bg-opacity-50  justify-center items-center px-3">
  <div className="relative p-5 bg-white w-full max-w-sm m-auto flex-col flex rounded-lg ">
  <div>{children}</div>
  <span className="absolute top-0 right-0 p-4">     
   <button onClick={() => onClose()}>
    <XMarkIcon className='h-5 w-5 text-red-500'/>
   </button>
 </span>
 </div>
</div>
  )
}

export default Modal