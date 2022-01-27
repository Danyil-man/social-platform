import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import Paginator from "../../redux/selectors/Paginator";
import { UserType } from "../../redux/types/types";
import { FilterType } from "../../redux/usersreducer";
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
  onFilterChanged: (filter: FilterType) => void
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
        <UserSearchForm onFilterChanged={props.onFilterChanged} />
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

interface PropsType {
  onFilterChanged: { filter: FilterType }=> void
}

export const UserSearchForm = () => {
  const submit = (values: FilterType, { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }) => {
    setSubmitting(false)

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
