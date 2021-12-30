import styled from "styled-components";
export const CartStyled = styled.form`

  .wrapper {
    max-width: 400px;
    max-height: 250px;
    margin: 220px auto;
    padding: 40px 30px 30px 30px;
    background-color: #d8dfe6;
    border-radius: 15px;
    box-shadow: 13px 13px 20px #b8babb, -13px -13px 20px rgb(194, 188, 188);
  }

  .wrapper .btn {
    margin: 80px;
    box-shadow: none;
    width: 60%;
    height: 60px;
    background-color: #03a9f4;
    color: #fff;
    border-radius: 10px;
    box-shadow: 3px 3px 3px #afaaaa, -3px -3px 3px rgb(177, 169, 169);
    letter-spacing: 1.3px;
  }

  .wrapper .btn:hover {
    background-color: #039be5;
  }

  .or {
    margin: 30px;
    text-align: center;
    font-size: 1.2rem;
    color: #03a9f4;
  }

  .wrapper a:hover {
    color: #039be5;
  }
`;
