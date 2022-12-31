import React from 'react'
import AppDrawer from '../AppDrawer/AppDrawer'

const PurchaseDrawer = ({
  visible = false,
  onClose = () => { },
}) => {
  return (
    <AppDrawer
      visible={visible}
      title="Purchase Drawer"
      placement="right"
      width={500}
      closable={true}
      maskClosable={true}
      onClose={onClose}
    >
      <div>Purchase Drawer</div>
    </AppDrawer>
  )
}

export default PurchaseDrawer