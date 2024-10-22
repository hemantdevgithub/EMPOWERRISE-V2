import { PropTypes } from 'prop-types'

const InputField = ({ text, register, name }) => {
  return (
    <input
      type="text"
      className={`
                w-full
                h-[50px]
                bg-white
                px-8
                rounded-lg
                focus:outline-none
                text-[18px]
                border-2
            `}
      placeholder={text}
      {...register(name, { required: true })}
    />
  );
};
InputField.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default InputField;
