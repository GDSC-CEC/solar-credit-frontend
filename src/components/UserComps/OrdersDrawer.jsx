import React from 'react'
import AppDrawer from '../AppDrawer/AppDrawer'

const OrdersDrawer = ({
  visible = false,
  onClose = () => { },
}) => {
  return (
    <AppDrawer
      visible={visible}
      title="Orders Drawer"
      placement="right"
      width={500}
      closable={true}
      maskClosable={true}
      onClose={onClose}
    >
      <div>Orders Drawer</div>
    </AppDrawer>
  )
}

export default OrdersDrawer