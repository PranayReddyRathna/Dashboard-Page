// src/components/Dashboard/Dashboard.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget, removeWidget } from '../../redux/actions/dashboardActions';
import CardSection from '../CardSection/CardSection';
import AddWidget from '../AddWidget/AddWidget';
import AddWidgetModal from '../AddWidgetModal/AddWidgetModal';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const dashboards = useSelector(state => state.dashboard.dashboards);
  const searchQuery = useSelector(state => state.search.query); // Get search query from Redux

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDashboardId, setCurrentDashboardId] = useState(null);

  const handleOpenModal = (dashboardId) => {
    setCurrentDashboardId(dashboardId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentDashboardId(null);
  };

  const handleSaveWidget = (widgetName, widgetText) => {
    const newWidget = { widgetId: Date.now(), widgetName, widgetData: { "Sample Data": parseInt(widgetText) } };
    dispatch(addWidget(currentDashboardId, newWidget));
  };

  const handleRemoveWidget = (dashboardId, widgetId) => {
    dispatch(removeWidget(dashboardId, widgetId));
  };

  return (
    <div>
      {dashboards.map(dashboard => (
        <div key={dashboard.dashboardId}>
          <h2 style={{textAlign:'start',paddingLeft:'2rem'}}> {dashboard.dashboardName}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {dashboard.widgets
              .filter(widget => widget.widgetName.toLowerCase().includes(searchQuery)) 
              .map(widget => (
                <div key={widget.widgetId}>
                  <CardSection widgetName={widget.widgetName} widgetData={widget.widgetData} />
                  <button onClick={() => handleRemoveWidget(dashboard.dashboardId, widget.widgetId)}>Remove</button>
                </div>
              ))
            }
            <AddWidget onAddWidget={() => handleOpenModal(dashboard.dashboardId)} />
          </div>
        </div>
      ))}

      <AddWidgetModal open={isModalOpen} onClose={handleCloseModal} onSave={handleSaveWidget} />
    </div>
  );
};

export default DashboardPage;
