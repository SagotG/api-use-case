import { notification } from 'antd';
import PropTypes from 'prop-types';

const Notification = (type, props) => {
  const { message, description } = props;
  notification[type]({
    message: message,
    description: description || '',
  });
};

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Notification;
