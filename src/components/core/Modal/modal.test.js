import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Modal from '.';

import { defaultModalData, modalIcons } from '../../../utils/constants';

describe('Component: Modal', () => {
  it('should render and call onClose function', () => {
    const handleClose = jest.fn();
    const { getByTestId } = render(
      <Modal
        data={defaultModalData}
        icons={modalIcons}
        isOpen
        closeModal={handleClose}
      />,
    );
    const modal = getByTestId('custom-modal');
    const button = modal.querySelector('button');

    expect(modal).toMatchSnapshot();

    fireEvent.click(button);
    // mock function should be called
    expect(handleClose).toHaveBeenCalled();
  });
});
