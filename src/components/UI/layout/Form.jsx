import styled from "@emotion/styled";

const Form = styled.form`
  position: absolute;
  width: 348px;
  height: 472px;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  -webkit-box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
  box-shadow: 0px 30px 60px rgba(32, 56, 85, 0.15);
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  label {
    display: block;
    font-size: 1.3rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`;

export default Form;
