import React, { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} lazy>
    <Suspense fallback={'Loading...'}>
      <LoginFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
