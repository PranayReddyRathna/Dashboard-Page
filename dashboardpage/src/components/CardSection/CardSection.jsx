import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import PieChartWidget from '../PieChartWidget/PieChartWidget';
import styles from './CardSection.module.css'

const CardSection = ({ widgetName, widgetData }) => {
  return (
    <Card variant="outlined" className={styles.widgetCard}>
      <CardContent>
        <Typography variant="h5" component="div" className={styles.widgetTitle}>
          {widgetName}
        </Typography>
        <div className={styles.chartContainer}>
          <PieChartWidget data={widgetData} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardSection;
