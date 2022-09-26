import { CartDetails } from '~/components/cart';
import { Drawer } from './Drawer.client';
// import './Layout.css'


export function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Drawer open={isOpen} onClose={onClose} heading="Cart" openFrom="right">
      <div className="grid">
        <CartDetails layout="drawer" onClose={onClose} />
      </div>
    </Drawer>
  );
}
