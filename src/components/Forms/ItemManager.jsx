import  { useState } from 'react';
import CreateUserForm from './CreateUserForm';
import Modal from './Modal';

function ItemManager() {
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState(null);

  
  const handleCreateUser = () => {
    
    setIsModalOpen(false); 
  };

  const handleOpenModal = (type) => {
    setFormType(type);
    setIsModalOpen(true);
  };

  const getForm = () => {
    if (formType === 'createUser') return <CreateUserForm onSubmit={handleCreateUser} />;
    
  };

  return (
    <div>
      <button
      className='bg-blue-600 text-white justify-center flex items-center p-2 mt-10 ml-20 text-center focus:outline-none font-medium text-sm rounded-lg'
      onClick={() => handleOpenModal('createUser')}>Create New User</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {getForm()}
      </Modal>
    </div>
  );
}

export default ItemManager;
