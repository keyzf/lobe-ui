import { EditableMessage, StroyBook, useControls, useCreateStore } from '@lobehub/ui';
import { button } from 'leva';
import { useState } from 'react';

export default () => {
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEdit] = useState(false);
  const store = useCreateStore();
  useControls(
    {
      editing: button(() => {
        setEdit(true);
      }),
      openModal: button(() => {
        setOpenModal(true);
      }),
    },
    { store },
  );
  return (
    <StroyBook levaStore={store}>
      <EditableMessage
        value={'editable text'}
        openModal={openModal}
        editing={editing}
        onEditingChange={setEdit}
      />
    </StroyBook>
  );
};
