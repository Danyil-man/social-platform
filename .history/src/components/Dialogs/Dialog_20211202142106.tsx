import React, { FC } from "react";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { InitialStateType } from "../../redux/messagereducer";
import {
  maxLengthCreator,
  requiredField,
} from "../../utils/validations/validators";
import { TextArea } from "../common/FormsControls/TextArea";
import dialogcss from "./Dialog.module.css";
import DialogeItem from "./DialogeItem/DialogeItem";
import Message from "./Message/Message";

let maxLength100 = maxLengthCreator(100);

interface MainProps {
  messagePage: InitialStateType
}

const Dialog: FC<> = (props) => {
  let state = props.messagePage;

  let dialogsElements = state.dialogsdata.map((dialog) => (
    <DialogeItem name={dialog.name} id={dialog.id} />
  ));

  let messElements = state.messdata.map((messEl) => (
    <Message mess={messEl.mess} />
  ));
  const DialogForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={TextArea}
            validate={[requiredField, maxLength100]}
            name="newMessageBody"
            placeholder="Enter message"
          ></Field>
        </div>
        <div>
          <button>Send Message</button>
        </div>
      </form>
    );
  };

  const ReduxMessageForm = reduxForm({ form: "message" })(DialogForm);

  const addNewMess = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  return (
    <div className={dialogcss.dialogs}>
      <div className={dialogcss.dialogsitem}>{dialogsElements}</div>
      <div className={dialogcss.messages}>{messElements}</div>
      <ReduxMessageForm onSubmit={addNewMess} />
    </div>
  );
}

export default Dialog;
