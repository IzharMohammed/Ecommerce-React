//React imports
import { useState, useEffect } from "react";
import axios from "axios";

//Api import
import { getAllCategories } from "../Apis/FakeStoreProdApis";

export default function useCategoryItems() {
  const [categories, setCategories] = useState("");

  const fetchData = async () => {
    const response = await axios.get(getAllCategories());
    setCategories(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return categories;
}
