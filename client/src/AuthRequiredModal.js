
import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

const AuthRequiredModal = ({ authRequiredModalOpen, setAuthRequiredModalOpen, triggerLogin }) => {
  const closeModal = () => {
    setAuthRequiredModalOpen(false);
  };

  const confirmModal = () => {
    setAuthRequiredModalOpen(false);
    triggerLogin();
  };

  return (
    <Modal
      onClose={closeModal}
      onActionClick={confirmModal}
      open={authRequiredModalOpen}
      closeOnDocumentClick={false}
      closeOnDimmerClick={false}
    >
      <Modal.Header>Auth required</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <p>Do you want to re-authenticate?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={closeModal}>
          No
        </Button>
        <Button positive onClick={confirmModal}>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
export default AuthRequiredModal;