import React, { FC } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import styles from "./styles.module.scss";

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <Button isUpperCase color="inherit" onClick={() => navigate("/catalog")}>Каталог</Button>
      <Button isUpperCase color="inherit" onClick={() => navigate("/admin")}>Админка</Button>
    </div>
  );
};

export default HomePage;