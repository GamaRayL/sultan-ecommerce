import React, { FC } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button';
import styles from "./styles.module.scss";

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <Button uppercase color="inherit" onClick={() => navigate("/home/catalog")}>Каталог</Button>
      <Button uppercase color="inherit" onClick={() => navigate("/home/admin")}>Админка</Button>
    </div>
  );
};

export default HomePage;