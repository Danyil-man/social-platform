import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import Paginator from "../../redux/selectors/Paginator";
import { UserType } from "../../redux/types/types";
import User from "./User";

interface PaginatorPropsType {
  totalUsers: number;
  pageSize: number;
  currentPage: number;
  portionSize?: number;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  onPageChange: (pageNumber: number) => void;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
}

const Users: FC<PaginatorPropsType> = ({
  totalUsers,
  pageSize,
  currentPage,
  onPageChange,
  users,
  ...props
}) => {
  return (
    <>
      <div>
        <UserSearchForm />
      </div>
      <div>
        <Paginator
          totalUsers={totalUsers}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
        <div>
          {users.map((u) => (
            <User
              user={u}
              followingInProgress={props.followingInProgress}
              key={u.id}
              unfollow={props.unfollow}
              follow={props.follow}
            />
          ))}
        </div>
      </div>
    </>
  );
};

type userSearchFormType = {
  term: string
}

export const UserSearchForm = () => {
  const submit = (values: userSearchFormType, { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }) => {
    setSubmitting(false)

    //alert(JSON.stringify(values))
  }

  return (<div>
    <Formik
      initialValues={{ term: '' }}
      validate={userSearchValidateForm}
      onSubmit={submit}
    >
      <Form>
        <label htmlFor="firstName">Term</label>
        <Field type="text" name="term" />
        <button type="submit" >Find</button>
      </Form>
    </Formik>
  </div>
  )
}

const userSearchValidateForm = (values: any) => {
  const errors = {}
  return errors
}

export default Users;
