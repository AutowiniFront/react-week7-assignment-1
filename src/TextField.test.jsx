import React from 'react';

import { render, getByLabelText } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  
  function renderTextField() {
    return render(
      <TextField />
    )
  }

  it('render label', () => {
    const { getLabelText } = renderTextField();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  })

  it('listens change events', () => {
    const { getByLabelText } = renderLoginForm({});

    const controls = [
      { label: 'E-mail', name: 'email', value: 'testers@example.com' },
      { label: 'Password', name: 'password', value: 'tests' },
    ];

    controls.forEach(({ label, value, name }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, {
        target: { value, name },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
  

})