import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import styles from './index.scss';

function Register() {
  const intl = useIntl();

  const onFinish = async () => {
    // TODO
  };

  return (
    <div className={styles.wrap}>
      <LoginForm
        title="App Upgrade"
        subTitle={intl.formatMessage({
          id: 'register.subTitle',
        })}
        onFinish={onFinish}
        submitter={{
          searchConfig: {
            submitText: intl.formatMessage({
              id: 'register.btn.text',
            }),
          },
        }}
        containerStyle={{
          height: 'auto',
        }}
      >
        <ProFormText
          name="username"
          fieldProps={{
            size: 'large',
            prefix: <UserOutlined className={'prefixIcon'} />,
          }}
          placeholder={intl.formatMessage({
            id: 'register.placeholder.username',
          })}
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                id: 'register.rule.username.required',
              }),
            },
          ]}
        />
        <ProFormText.Password
          name="password"
          fieldProps={{
            size: 'large',
            prefix: <LockOutlined className={'prefixIcon'} />,
          }}
          placeholder={intl.formatMessage({
            id: 'register.placeholder.password',
          })}
          rules={[
            {
              required: true,
              message: intl.formatMessage({
                id: 'register.rule.password.required',
              }),
            },
          ]}
        />
      </LoginForm>
    </div>
  );
}

export default Register;
