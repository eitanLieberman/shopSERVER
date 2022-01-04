import styled from "styled-components";
import { useEffect, useState } from "react";
// import { categories } from "../data";
import CategoriesItem from "./CategoriesItem";
import { mobile } from "../responsive";
import axios from "axios";
import { axiosInstance } from "../config";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axiosInstance.get("/categories");
        console.log(res);
        setCategories(res.data);
      } catch (err) {}
    };
    getCategories();
  }, []);

  return (
    <Container>
      {categories.map((item) => (
        <CategoriesItem item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Categories;
